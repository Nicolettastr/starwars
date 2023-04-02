import React from "react";
import { Carousel } from "../component/Carousel";
import Select from "../component/Select";
import Text from "../component/text.js"
import { Animator, ScrollContainer, ScrollPage, Fade, batch,  Move } from "react-scroll-motion";


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
					<Animator transition={{ duration: 10}}
					animation={batch(Move(-400, 0, -1, 10), { final: [-400, 0] })}>
						<Text/>
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Animator animation={batch(Move(0, 600, null, -600))}>
						<Select />
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div >
	)
}