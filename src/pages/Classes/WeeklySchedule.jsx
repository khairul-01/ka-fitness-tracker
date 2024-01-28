

const WeeklySchedule = ({schedule}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(schedule).map((day) => (
                        <tr key={day}>
                            <td>{day}</td>
                            {schedule[day].map(({ time, activity }) => (
                                <td key={time}>{`${time}: ${activity}`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeeklySchedule;