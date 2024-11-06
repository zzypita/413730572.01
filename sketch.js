let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle=0
let r=20
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/LXGWWenKaiTC-Regular.ttf") 
}
//===================================================

function setup() {//設定初始內容 執行一次
  createCanvas(windowWidth, windowHeight);//產生畫布
  background("#4cc9f0")//設定背景顏色
  angleMode(DEGREES)//設定三角函數的角度0-360
  points = font.textToPoints("TKUET", -300, 80, 200, )
  sampleFactor:0.1

}


function draw() {//畫圖每秒畫60次
  //background(220);//背景顏色灰白色
  background("#cc9f0")
  rectMode(CENTER)//把方形的座標點設在中心
  noFill()//以下所畫物勿塗色
  stroke("#4cc9f0")//線條顏色
  strokeWeight(5)//線的粗細 
//宣告變數
var rect_width=50+mouseX/10     //方寬
var bc_width=50+mouseY/10     //大園寬
var sc_width=25     //小圓寬
 

  //FOR迴圈
  //i=0:i為變數，要i從0開始(設定i的初始值)
  //i<20:條件判斷 當條件成立 就繼續進到回圈內程式碼運行
  //i=i+1:i值每次改變差距值
  for(let j=0;j<20;j=j+1){//產生第幾排
      for(let i=0;i<40;i=i+1){
          if(j<5){//0-4排共5排設定顏色
              stroke("#52dee5")
          }else if(j<10){
              stroke("#92dce5")
          }else if(j<15){
              stroke("#97dffc")
          }else if(j<40){
              stroke("#84d2f6")
          }
      ellipse(25+50*i,25+50*j,bc_width)
      rect(25+50*i,25+50*j,50,rect_width)
      ellipse(50+50*i,50+50*j,sc_width)
       }
  }

translate(width/2,height/2)//把原本圓點(0.0)在左上角<改為到畫布中心點(width/2,height/2)
  rotate(frameCount%360)//依照framecount除以360求於數
  
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)
    fill("#ffd500")//畫圓充滿顏色
    //noStroke()
    stroke("#068d9d")//框限顏色
    strokeWeight(3)//畫圈的框限粗細
    //ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
   line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10))//在兩個點構成一條線

  } 
  angle=angle+10
}