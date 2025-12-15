export default function RegisterForm() {
    return (
        <div>
            Register Form
            <div>
                <label>Name</label>
                <input type="Text" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" />
            </div>
        </div>
    );
}