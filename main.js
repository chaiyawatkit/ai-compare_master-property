require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
  //const input = "ขายที่ดิน 1 ไร่ ซอยรามคำเเหง 164 เเยก 4 ใกล้สถานีรถไฟฟ้าสายสีส้ม ห่างจากหน้าปากซอยประมาณ 260 เมตร"
  const input = "2 Bedroom Condo for sale at Le Nice Ekamai U1414120"
  const master = "Le Nice Ekamai"

  const prompt = input +"ต้องการทราบว่าเป็นคอนโดในโครงการของ และมีชื่อใกล้เคียง หรือ ตรงกับ  " + master + "ใช่หรือไม่  ถ้าใช่ให้ตอบใช่ ไม่ใช่ให้ตอบไม่ใช่ และ ตัวเลขเปอร์เซ็นต์ความเหมือนด้วย"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();