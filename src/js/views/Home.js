import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";
import Text from "../component/text.js"
import { Animator, ScrollContainer, ScrollPage, Fade, batch, Move, FadeIn } from "react-scroll-motion";
import Button from "../component/Button.js";


export const Home = (props) => {

	return (
		<div className="text-center mt-5">
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade())}>
						<Carousel darth={props.darth} />
					</Animator>
				</ScrollPage>
				<ScrollPage className="text_container">
					<Animator animation={batch(Move(-600, 0, -1, 20), FadeIn())}>
						<Text />
					</Animator>
				</ScrollPage>
				<ScrollPage className="select_containerScroll">
					<Animator animation={batch(FadeIn(), Fade())}>
						<Select />
					</Animator>
				</ScrollPage>
				<ScrollPage className="button_animation">
					<Animator>
						<Button />
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div >
	)
}