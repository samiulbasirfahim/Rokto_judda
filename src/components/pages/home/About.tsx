import { ReactElement } from "react"

const About = (): ReactElement => {
	return (
		<div className="container mx-auto my-16">
			<div className="flex justify-between">
				<div className="w-2/3">
					<p className="text-neutral font-sans">
						Hey there! I'm a software developer based in the
						Bangladesh. I'm currently working on a charity website.
						This website Is based on blood donation. User can
						communicate with donar by this website (Dummy text..
						edit this)
					</p>
				</div>
				<div className="border-l-8 border-0 pl-6 border-primary flex w-1/3 justify-start ml-10   items-center">
					<h1 className="text-4xl font-extrabold font-mouse">
						About
					</h1>
				</div>
			</div>
			<div className="divider"></div>
			<div className="flex justify-between">
				<div className="border-r-8 border-0 pr-6 border-primary flex w-1/3 justify-end mr-10 items-center">
					<h1 className="text-4xl font-extrabold font-mouse">
						Our Story
					</h1>
				</div>
				<div className="w-2/3">
					<p className="text-neutral font-sans">
						Hey there! I'm a software developer based in the
						Bangladesh. I'm currently working on a charity website.
						This website Is based on blood donation. User can
						communicate with donar by this website Lorem ipsum
						dolor, sit amet consectetur adipisicing elit. Eveniet
						esse iste asperiores quos tenetur laboriosam earum,
						pariatur adipisci iure nulla laborum molestiae provident
						inventore accusantium vitae veniam mollitia? Iure,
						voluptas! (Dummy text.. edit this)
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
