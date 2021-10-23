import {
	Link
} from "react-router-dom";

export const SidePanel = () => {

	return (
		<>

			<div className="side-panel">
				<nav>
					<ul>
						<li>
							<Link className="link" to="/goodCat">Good Cat</Link>
						</li>
						<li>
							<Link className="link" to="/calmCat">Calm Cat</Link>
						</li>
						<li>
							<Link className="link" to="/angryCat">Angry Cat</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}