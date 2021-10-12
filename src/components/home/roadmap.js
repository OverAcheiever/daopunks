import React from "react";
import Image1 from "../../assets/images/roadmap/#01.png";
import Image2 from "../../assets/images/roadmap/#02.png";
import Image3 from "../../assets/images/roadmap/#03.png";
import Image4 from "../../assets/images/roadmap/#04.png";
import Image5 from "../../assets/images/roadmap/#05.png";
import Image6 from "../../assets/images/roadmap/#06.png";
import Image7 from "../../assets/images/roadmap/#07.png";
import Shirts from "../../assets/images/roadmap/shirts.png";
import Shirt1 from "../../assets/images/roadmap/shirt-1-mobile.png";
import Shirt2 from "../../assets/images/roadmap/shirt-2-mobile.png";

export default function Roadmap() {
  return (
    <>
      <div id="roadmap" className="w-screen h-max bg-white modius-bold">
        <div className="pt-24 text-center text-red text-4xl xl:text-7xl">
          ROADMAP
        </div>
        <div className="flex flex-col items-center mt-10 xl:mt-24 mb-24 gap-y-16 xl:gap-y-16">
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center px-5">
            <img className="w-60" src={Image1} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl xl:text-3xl">
                MINT YOUR DAOPUNK
              </div>
              <div className="mt-3 open-sans-light text-md">
                Public mint. DAOPunks will be available to mint in early
                October. Date TBD. Each of these DAOPunks will be unique and
                have generative traits.
              </div>
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center xl:items-start px-5">
            <img className="w-60" src={Image2} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                Claim your shirt printed with your exact NFT andunique
                identifiers
              </div>
              <div className="mt-3 open-sans-light text-md">
                Each DAOpunk NFT minted from the Phase 1 public sale will be
                entitled to a limited edition tee from MetaFactory DAO. The
                physical tee will feature your DAOpunk JPEG along with metadata
                and QR code for proof of ownership IRL. These unique identifiers
                will actually be in the print design on the shirt itself! The
                claim window will be announced sometime after the primary sale.
              </div>
              <img className="hidden xl:block" src={Shirts} alt="" />
              <img className="block xl:hidden" src={Shirt1} alt="" />
              <img className="block xl:hidden" src={Shirt2} alt="" />
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center xl:items-start px-5">
            <img className="w-60" src={Image3} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                Free humans from soul-sucking work! DAOpunks “public goods”
                grant initiated. Bridge from default jobs to full-time DAO work
              </div>
              <div
                className="mt-3 open-sans-light text-md"
              >
                We have received some amazing suggestions from the community on
                future projects and perks for DAOpunks token holders. In an
                effort to kickstart these projects, we will be allocating 25% of
                the primary sale to the DAOpunks community treasury. The
                DAOpunks treasury will be used primarily to fund community voted
                projects that have the ideals of growing and supporting the
                overall DAO ecosystem and the people behind them. These ideas
                revolve around providing a “public goods” style grant that will
                fund people who want to move from a traditional job into full
                time DAO work. From CORPORATEpunk to DAOpunk. Think Tradcorp
                off-ramp, DAO on ramp. 50% of all secondary sales revenue will
                be allocated to the DAOpunk treasury to continue funding these
                initiatives.
              </div>
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center xl:items-start px-5">
            <img className="w-60" src={Image4} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                “How To DAO” A massive DAO-DAO collaboration project initiated
              </div>
              <div className="mt-3 open-sans-light text-md">
                After the success of our DAOpunks NFT-Merch launch, we will
                launch How To DAO. This will be a large-scale collaboration
                between over 50 DAOs, the likes of which the world has never
                seen before. An artist will be chosen from each DAO to create a
                piece of artwork that plays with the DAOpunk ethos and stays
                true to their DAO. With the assistance of Metafactory DAO, we
                will open up the innovative printing technology to other DAOs
                that allows for unique 1/1 NFT information on each garment. Each
                piece of artwork will be sold as an NFT and redeemable for a
                free merch item that contains the exact NFT and unique
                identifiers. 50% of sales will go towards the DAOpunks treasury
                and funding public goods grants and projects that will help
                bring more people into thriving full-time DAO work. Our
                ecosystem will grow stronger and healthier because of our
                contributions.
              </div>
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center px-5">
            <img className="w-60" src={Image5} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                DAOpunk merch store and limited edition merch drops
              </div>
              <div className="mt-3 open-sans-light text-md">
                Featuring limited edition tees, hoodies, metaverse wearables,
                and other goodies to spread our DAOculture IRL. Metafactory DAO
                will produce some of our limited-edition drops. If you look
                closely at the DAOpunks you will see many possible future merch
                items. Which one will we choose? Join us and add your voice.
              </div>
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center px-5">
            <img className="w-60" src={Image6} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                More DAO-DAO collaborations and DAOpunk NFT drops
              </div>
              <div className="mt-3 open-sans-light text-md">
                We will continue to explore innovative new methods to fund our
                treasury and contribute to the goal of helping to free humans
                from the slavery of the work found in the trenches of
                traditional companies.
              </div>
            </div>
          </div>
          <div className="max-w-sm xl:max-w-4xl flex flex-col xl:flex-row xl:gap-x-16 items-center px-5">
            <img className="w-60" src={Image7} alt="" />
            <div>
              <div className="mt-5 modius-bold text-red text-2xl">
                All humans are freed! Free from default world drudgery.
                Full-time DAO destiny for all those that desire it{" "}
              </div>
              <div className="mt-3 open-sans-light text-md">
                All humans are freed from the drudgery of mindless, soul-sucking
                work and it’s directly because of the contributions from the
                DAOpunks community.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
