import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";
import { Animator, ScrollContainer, ScrollPage, Fade, batch, Zoom } from "react-scroll-motion";


export const Home = (props) => {

	return (
		<div className="text-center mt-5">
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade())}>
						<Carousel darth={props.darth} />
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Animator>
						<Select />
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div >
	)
}