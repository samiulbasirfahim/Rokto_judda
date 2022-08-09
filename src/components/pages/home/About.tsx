import { ReactElement } from "react"
const bloodDonationImage = require("../../../assets/images/bannerBackground.jpg")

const About = (): ReactElement => {
	return (
		<div>
			<div className="container mx-auto my-16">
				<div className="flex justify-between">
					<div className="w-2/3">
						<p className="text-neutral font-sans">
							Hey there! I'm a software developer based in the
							Bangladesh. I'm currently working on a charity
							website. This website Is based on blood donation.
							User can communicate with donar by this website
							(Dummy text.. edit this)
						</p>
					</div>
					<div className="border-l-8 border-0 pl-6 border-primary flex w-1/3 justify-start ml-10   items-center">
						<h1 className="text-4xl font-extrabold font-mouse hover:text-primary duration-500">
							About
						</h1>
					</div>
				</div>
				<div className="divider"></div>
				<div className="flex justify-between">
					<div className="border-r-8 border-0 pr-6 border-primary flex w-1/3 justify-end mr-10 items-center">
						<h1 className="text-4xl font-extrabold font-mouse  hover:text-primary duration-500">
							Our Story
						</h1>
					</div>
					<div className="w-2/3">
						<p className="text-neutral font-sans">
							Hey there! I'm a software developer based in the
							Bangladesh. I'm currently working on a charity
							website. This website Is based on blood donation.
							User can communicate with donar by this website
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Eveniet esse iste asperiores quos tenetur
							laboriosam earum, pariatur adipisci iure nulla
							laborum molestiae provident inventore accusantium
							vitae veniam mollitia? Iure, voluptas! (Dummy text..
							edit this)
						</p>
					</div>
				</div>
			</div>
			<div className="bg-base-300 w-full">
				<div className="container mx-auto py-16 flex items-center">
					<div className="w-1/3">
						<img
							src={bloodDonationImage}
							className="rounded-lg max-w-lg"
							alt=""
						/>
					</div>
					<div className="w-2/3 pl-10">
						<h1 className="text-4xl font-extrabold font-mouse  hover:text-primary duration-500 border-b-8 border-0 pb-6 border-primary ">
							Our mission
						</h1>
						<p className="text-neutral font-sans mt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Ipsam repellendus voluptatibus
							dolores ducimus mollitia ut, odit, recusandae velit
							consequatur quaerat distinctio neque, earum illo
							quis a non dolor maxime labore!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
