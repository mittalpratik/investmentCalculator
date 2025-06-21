export default function UserInput({userValue, onUserValue}) {
    // const [userValue, setUserValue] = useState(userValue);
    // initialUserValue = userValue;

    function handleUserValue(event, key){
        console.log(event);
        console.log(key);
        onUserValue(key,event.target.value);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userValue.initialInvestment} onChange={(event) => handleUserValue(event,"initialInvestment")} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userValue.annualInvestment} onChange={(event) => handleUserValue(event,"annualInvestment")} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userValue.expectedReturn} onChange={(event) => handleUserValue(event,"expectedReturn")} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userValue.duration} onChange={(event) => handleUserValue(event,"duration")} />
                </p>
            </div>
        </section>
    );
}