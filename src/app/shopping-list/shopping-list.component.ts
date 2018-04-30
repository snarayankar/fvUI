import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { LoggingService } from '../logging.service';


//import { LoggingService } from '../logging.service'; NEVER DO THIS FOR SERVICE

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [LoggingService]
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [
		new Ingredient('Apples',5),
		new Ingredient('Tomatoes',10),
		];
  constructor(private loggingService: LoggingService) { }


//NEVER DO THIS FOR SERVICE
  // testMethod () {
  //   const service = new LoggingService();
  //   service.logStatusChange("new message");
  // }

  ngOnInit() {
      this.loggingService.logStatusChange("test");
  }

}
