

const WeeklySchedule = ({schedule}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
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