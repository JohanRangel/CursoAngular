import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://lh3.googleusercontent.com/beGuzmf-HWrsjxmwSwWRl_DNvt7TZgHVdkjqZWr-mPvz1eNlpxP8Qpc6waDjzgYbLu9PE9xC6N19_xKGhY0U4eNN_4GIQvZc1bH9qMq8AQ"
  public Titulo:string = "Curso de Angular con Interpolacion"

  ngOnInit(): void {
    }

}
