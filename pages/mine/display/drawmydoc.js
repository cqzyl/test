/*
* 简历canvas绘制
*/
export default class DrawMyDoc {
  constructor(context, data) {
    this.context = context
    this.data = data
    this.canvasHeight = 0
    this.start();
  }
  start() {
    const ct = this.context
    ct.setStrokeStyle("#00ff00")
    ct.setLineWidth(5)
    ct.rect(0, 0, 200, 200)
    ct.stroke()
    ct.setStrokeStyle("#ff0000")
    ct.setLineWidth(2)
    ct.moveTo(160, 100)
    ct.arc(100, 100, 60, 0, 2 * Math.PI, true)
    ct.moveTo(140, 100)
    ct.arc(100, 100, 40, 0, Math.PI, false)
    ct.moveTo(85, 80)
    ct.arc(80, 80, 5, 0, 2 * Math.PI, true)
    ct.moveTo(125, 80)
    ct.arc(120, 80, 5, 0, 2 * Math.PI, true)
    ct.stroke()
    ct.draw()
  }
};
