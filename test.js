const text = "Câu 2: Đâu là ngôn ngữ lập trình phổ biến nhất hiện nay thường được ứng dụng trong phân tích dữ liệu và AI?\nA. C++\nB. Java\nC. Python\nD. Swift\nĐáp án: C";
function parseMultipleChoice(text) {
  if (!text) return { questionBody: "", options: [] };

  const lines = text.split("\n");
  const questionLines = [];
  const options = [];

  const optionRegex = /^\s*([A-D])[\.\)\/\s-]\s*(.*)$/i;
  const nonOptionContinuationRegex =
    /^\s*(?:\d+[\.\)\/\s-]|[\-\*•]|\b(?:Bài|Yêu cầu|Biết rằng|Ghi chú|Lưu ý|Chú ý|Đề số|Mã số|Thời gian)\b)/i;

  let currentOption = null;
  const postQuestionLines = [];

  for (const line of lines) {
    const match = line.match(optionRegex);
    if (match) {
      if (currentOption) {
        options.push(currentOption);
      }
      currentOption = {
        label: match[1].toUpperCase(),
        text: match[2].trim(),
      };
    } else {
      if (currentOption) {
        if (!line.trim() || nonOptionContinuationRegex.test(line)) {
          options.push(currentOption);
          currentOption = null;
          postQuestionLines.push(line);
        } else {
          currentOption.text += "\n" + line.trim();
        }
      } else {
        if (options.length > 0) {
          postQuestionLines.push(line);
        } else {
          questionLines.push(line);
        }
      }
    }
  }

  if (currentOption) {
    options.push(currentOption);
  }
  
  console.log(options);
}
parseMultipleChoice(text);
