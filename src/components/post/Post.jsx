import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
	return (
		<div className="post">
			<img className="postImg" src={img} alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">
						<Link className="link" to="/posts?cat=Music">
							Music
						</Link>
					</span>
					<span className="postCat">
						<Link className="link" to="/posts?cat=Music">
							Life
						</Link>
					</span>
				</div>
				<span className="postTitle">
					<Link className="link" to="/post/abc">
						Lorem ipsum dolor sit amet
					</Link>
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
				quisquam sequi eaque incidunt nisi aperiam, voluptatum eius facilis
				aliquid nemo quibusdam corporis nam quia ullam fugit explicabo et, nobis
				voluptates.
			</p>
		</div>
	);
}
