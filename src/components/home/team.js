import React from "react";
import BackgroundImage from "../../assets/images/backgrounds/team-background.png";
import TeamMember from "../../assets/images/team/team-member.png";
const team = [
  {
    image: TeamMember,
    name: "CRYPTO BUSHI",
    description:
      "In 1977, the influence of the music and subculture spread worldwide",
  },
  {
    image: TeamMember,
    name: "SINJUN",
    description:
      "In 1977, the influence of the music and subculture spread worldwide",
  },
  {
    image: TeamMember,
    name: "BANKLESS DAO",
    description:
      "In 1977, the influence of the music and subculture spread worldwide",
  },
  {
    image: TeamMember,
    name: "FLOC",
    description:
      "In 1977, the influence of the music and subculture spread worldwide",
  },
];

export default function Team() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        // backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      className="w-screen h-max bg-cover flex flex-col items-center"
    >
      <h1 className="mx-20 mt-10 lg:mt-40 md:mt-32 text-white red-text-shadow modius text-5xl md:text-6xl text-center">
        MEET THE TEAM
      </h1>

      <div className="my-24 mx-10 lg:my-36 lg:mt-48 flex flex-col lg:flex-row gap-y-24 lg:gap-x-14">
        {team.map((member, key) => {
          return (
            <div className="flex flex-col items-center mx-5" key={key}>
              <img src={member.image} className="rounded-full" alt="" />
              <div
                style={{ maxWidth: "15rem" }}
                className="mt-24 modius text-3xl text-white text-center"
              >
                {member.name}
              </div>
              <div
                style={{ maxWidth: "15rem" }}
                className="mt-6 max-w-xs open-sans text-1xl text-white text-center"
              >
                {member.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
