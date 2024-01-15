import SectionTitle from "../../ui/sectiontitle/SectionTitle";
import Card from "../../ui/card/Card";
import sponsor from "../../assets/images/sponsor.png";
import tezos from "../../assets/images/tezos.svg";
import circle from "../../assets/images/circle_logo.png";
import xdc from "../../assets/images/XDC_Network_logo.png";
import berachain from "../../assets/images/berachain_logo.svg";
import polygon from "../../assets/images/polygon-logo.svg";
import replit from "../../assets/images/replit.svg";
import MDD_logo from "../../assets/images/mov.svg";

const Sponsors = () => {
	return (
		<div className="flex flex-col gap-12 items-center">
			<SectionTitle name={"SPONSORS"} />
			<div className="flex flex-col gap-24 w-full">
				<div className="flex flex-col gap-12">
					<span className="text-white text-2xl font-extrabold text-center tracking-wider">
						PLATINUM
					</span>
					<div className="flex justify-evenly flex-wrap gap-8 items-center">
						{/* <Card image={circle} title={"Coming Soon"} content={" "} />
						<Card image={sponsor} title={"Coming Soon"} content={" "} />
						<Card image={sponsor} title={"Coming Soon"} content={" "} />
						<Card image={sponsor} title={"Coming Soon"} content={" "} /> */}
						<img src={circle} alt="" className="w-[300px] h-[100px]"/>
						<img src={tezos} alt="" className="w-[300px] h-[100px]"/>
						<img src={xdc} alt="" className="w-[300px] h-[100px]"/>
						<img src={berachain} className="w-[300px] h-[200px]"/>
					</div>
				</div>
				<div className="flex flex-col gap-12">
					<span className="text-white text-2xl font-extrabold text-center tracking-wider">
						GOLD
					</span>
					<div className="flex justify-evenly flex-wrap gap-8">
						<img src={polygon} alt="" className="w-auto h-36" />
						<img src={MDD_logo} className="w-auto h-40"/>
					</div>
				</div>
				<div className="flex flex-col gap-12">
					<span className="text-white text-2xl font-extrabold text-center tracking-wider">
						SILVER
					</span>
					<div className="flex justify-evenly flex-wrap gap-8">
						<img src={replit} alt="" className="w-80 h-40" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
