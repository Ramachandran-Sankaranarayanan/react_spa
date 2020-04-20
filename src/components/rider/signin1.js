class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
        this.setState({ error: "Incorrect Email-Id or Password!" });
        } else {
            try {            
                const response = await api.post("login", querystring.stringify({ email, password }));            
                login(response.data.token);
                console.log('ttttt', login(response.data.token));            
                this.props.history.push("/menu");
            } catch (err) {
                this.setState({
                error:
                    "Not able to login, Please Verify the credenciais"
                });
            }
        }        
    };
    <form onSubmit={this.handleSignIn}>
    {this.state.error && <p>{this.state.error}</p>}
        <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                placeholder="E-mail"
                onChange={e => this.setState({ email: e.target.value })}
                className='form-control'
            />
            <br />
            <label>Password:</label>
            <input
                type="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                className='form-control'
            />
        </div>
        <div className='row'>
            <div className='col-md-4'>                            
                <button type="submit" >Log In</button>
            </div>
        </div>
    </form> 