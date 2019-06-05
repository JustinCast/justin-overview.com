import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from '../dialogs/dialog-manager.service';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {
  written_date: Date = new Date('2019-05-18')
  constructor(public _dialog: DialogManagerService) { }

  ngOnInit() {
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/angieaudio.mp3";
    audio.load();
    audio.play();
  }
}
