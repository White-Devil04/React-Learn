function Assign3() {
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log('You have pressed the Enter key: ', e.target.value); //shows what you have entered in the textbox But this e.target.value don't work in alert message.
        }
    }
    return (
        <div>
            <h2>Assignment 3</h2>
            <form>
                <label>
                    Name:
                    <input type="text" onKeyPress={handleKeyPress} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Assign3;