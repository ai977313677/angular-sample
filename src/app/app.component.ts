import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ckplayerDemo';

  private showModal = false; // 显示ckplayer弹窗
  private player = null; // ckplayer对象
  private timer = null; // 延时生成ckplayer的定时器

  constructor(private msgService: NzMessageService) { }

  // 弹出播放器框
  showCKPlayer() {
    /**
     * 1. 直接创建播放器框
     */
    var videoObject = {
      container: '#video',//“#”代表容器的ID，“.”或“”代表容器的class
      variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
      autoplay: true,//自动播放
      live: true,//直播视频形式
      video: 'rtmp://live.hkstv.hk.lxdns.com/live/hks'//视频地址
    };
    // this.player = new ckplayer(videoObject);
    this.showModal = true;

    /**
     * 2. 延时创建，等到div加载出来创建播放器
     */
    let loadBegin = new Date();
    this.timer = setInterval(() => {
      // 这一步绕过了vdom，不过不涉及创建修改，所以这里影响较小
      // 之后创建ckplayer的部分影响较大
      if (document.getElementById('video') != null) {
        clearInterval(this.timer);
        this.timer = null;
        let loadFinish = new Date();
        console.log('div动态创建用时' + (loadFinish.getTime() - loadBegin.getTime()));
        this.player = new ckplayer(videoObject);
      }
    }, 1);
  }
}
