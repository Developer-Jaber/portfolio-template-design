import React from 'react';

const Contact_Form = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="fName">First Name</label>
                <input type="text" id='fName'/>
                <label htmlFor="lName">Last Name</label>
                <input type="text" id='lName'/>
                <label htmlFor="eMail">Email*</label>
                <input type="email" name="E_Mail" id="eMail" />
                <label htmlFor="message">Leave us a message...</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact_Form;