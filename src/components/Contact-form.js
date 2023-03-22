import './../style/contact-form.scss';
import media from './../media/Minion.webp';

function Form () {
    return (
        <div className='contact-form'>
            <div className='container'>
                <div className='form-content'>
                    <div className='media d-none d-md-block'>
                        <img src={media} alt='minion'/>
                    </div>
                    <div className='form'>
                        <h3 className='form-title'>Stay in the Know!</h3>
                        <div className='form-description'>Don't get left behind! <br/> Subscribe to our newsletters today!</div>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name='name' placeholder='Name'/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name='email' placeholder='Email'/>
                            </div>
                            <div className="form-group">
                                <select className="" id="country" name='country'>
                                    <option value="" disabled selected>Country</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="" id="platform" name='platform'>
                                    <option value="" disabled selected>Platform</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className='policy'>
                                <div className="checkbox">
                                    <input type="checkbox"/>
                                    <label> By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox"/>
                                    <label> I agree to receive promotional offers relating to all Gameloft games and services.</label>
                                </div>  
                            </div>
                            <div className='actions'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;