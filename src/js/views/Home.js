import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";
import Text from "../component/text.js"
import { Animator, ScrollContainer, ScrollPage, Fade, batch, Move, FadeIn, StickyIn, ZoomIn, Sticky } from "react-scroll-motion";
import Button from "../component/Button.js";


export const Home = (props) => {

	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

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
					<Animator animation={FadeUp}>
						<Select />
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Button />
				</ScrollPage>
			</ScrollContainer>
		</div >
	)
}