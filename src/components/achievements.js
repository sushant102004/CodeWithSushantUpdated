export default function Achievements() {
  return (
    <>
      <div className="mt-16 pb-10 lg:w-1/2 lg:mt-0 lg:pb-20 lg:ml-40">
        <p className="text-xl font-medium">Achievements</p>
        <hr
          className="w-1/4 bg-yellow-400 rounded-md mt-2 lg:w-20"
          style={{ height: "0.3rem" }}
        />
        <AchievementTile title = "SIH'22 Grand Finalist"/>
        <AchievementTile title = "IIT Madras & Renault Hack-cidents"/>
        <AchievementTile title = "Google's Compose Camp'22 Facilitator"/>
        <AchievementTile title = "Google Cloud Facilitator Ready"/>
        <AchievementTile title = "Microsoft AZ-900 Certified"/>
        <AchievementTile title = "App publisher @Goolge Play"/>

      </div>
    </>
  );
}

function AchievementTile(props) {
  return (
    <>
      <div className="flex w-80 ml-4 mt-4">
        <p className="text-slate-800">•</p>
        <p className="text-slate-800 ml-4 text-sm">{props.title}</p>
      </div>
    </>
  );
}
