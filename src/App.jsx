import './App.css';
import React from "react";
import { SidePanel } from './SidePanel';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

export const App = () => {

	return (
		<Router>
			<div className="row">
				<div className="col-lg-3">
					<SidePanel />
				</div>
				<div className="col-lg-9">

					<Route path="/goodCat">
						<img src="https://static.mk.ru/upload/entities/2018/04/19/articles/facebookPicture/1d/86/2d/7f/2b51b698003185c1de360a0dc7b846ea.jpg" width="400px" height="400px" alt="manul cat" />
					</Route>
					<Route path="/calmCat">
						<img src="https://www.meme-arsenal.com/memes/34172b1fd10562e04ab76040582cf410.jpg" width="400px" height="400px" alt="calm cat" />
					</Route>
					<Route path="/angryCat">
						<img src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-09/Depositphotos_9979039_xl-2015.jpg" width="400px" height="400px" alt="calm cat" />

					</Route>

				</div>
			</div>
		</Router>

	);
}


