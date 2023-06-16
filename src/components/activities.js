const activityList = [
    {
        name:"Competitions",
        date:"",
        description:"School Science Fair, Art Competition, Piano Competition"
    },
    {
        name:"volunteering",
        date:"",
        description:"Food pantries, library helper, rebuilding homes, Chinese orchestra rehearsal and performance"
    }
]

const ActivityTemplate = ({activity}) => {
    return (
        <div>
            <div> {activity.name} </div>
            <div> {activity.date} </div>
            <div> {activity.description} </div>
        </div>
    );
}

const Activities = () => {
    return (
        <div className="activites">
            <div> List of activites:</div>
            {activityList.map((pr, index) => <ActivityTemplate key={index} activity={pr}/>)}

        </div>
    );
};

export default Activities;