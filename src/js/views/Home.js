import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";
import Text from "../component/text.js"
import { Animator, ScrollContainer, ScrollPage, Fade, batch,  Move, FadeIn, Sticky } from "react-scroll-motion";


export const Home = (props) => {


	return (
		<div className="text-center mt-5">
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade())}>
						<Carousel darth={props.darth}/>
					</Animator>
				</ScrollPage>
				<ScrollPage className="text_container">
					<Animator animation={batch(Move(-600, 0, -1, 20))}>
						<Text/>
					</Animator>
				</ScrollPage>
				<ScrollPage className="select_containerScroll">
					<Animator animation={batch(Move(600, 0, -1, null), FadeIn())}>
						<Select />
					</Animator>
				</ScrollPage>
				<div className="empty_space"></div>
			</ScrollContainer>
		</div >
	)
}