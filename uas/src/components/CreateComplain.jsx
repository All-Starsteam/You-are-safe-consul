import React from "react";

let CreatComplain = () => {
  return (
    <div id="complain" className="form">

      <div className="header">CreatComplain</div>
      <div className="form-control">
        <label for="name" id="label-name">
          Name
        </label>

        <input type="text"
    id="name"
    placeholder="Enter your name" />

      </div>
      <div className="form-control">
<label for="email" id="label-email">
    Email
</label>
<input type="email"
    id="email"
    placeholder="Enter your email" />
</div>

<div className="form-control">
<label for="role" id="label-role">
    choose your government:
</label>

    
<select name="role" id="role">
    <option value="Ariana">Ariana</option>
    <option value="Béja">Béja</option>
    <option value="Ben Arous">Ben Arous</option>
    <option value="Bizerte">Bizerte</option>
    <option value="Gabès">Gabès</option>
    <option value="Gafsa">Gafsa</option>
    <option value="Jendouba">Jendouba</option>
    <option value="Kairouan">Kairouan</option>
    <option value="Kasserine">Kasserine</option>
    <option value="Kebili">Kebili</option>
    <option value="Kef">Kef</option>
    <option value="Mahdia">Mahdia</option>
    <option value="Manouba">Manouba</option>
    <option value="Medenine">Medenine</option>
    <option value="Monastir">Monastir</option>
    <option value="Nabeul">Nabeul</option>
    <option value="Sfax">Sfax</option>
    <option value="Sidi Bouzid">Sidi Bouzid</option>
    <option value="Siliana">Siliana</option>
    <option value="Sousse">Sousse</option>
    <option value="Tataouine">Tataouine</option>
    <option value="Tozeur">Tozeur</option>
    <option value="Tunis">Tunis</option>
    <option value="Zaghouan">Zaghouan</option>
    
</select>
</div>
<div class="form-control">
		<label for="role" id="label-role">
			choose your complain:
		</label>
		
		
		<select name="role" id="role">
			<option value="omestic Violence">Domestic Violence </option>
			<option value="Sexual Violence">Sexual Violence</option>
			<option value="harassment and stalking">harassment and stalking</option>
			<option value="Racism/Sexism">Racism/Sexism</option>
			
		</select>
    <div class="form-control">
		<label for="complain">
			your complaints
		</label>

		
		<textarea name="comment" id="comment" className="text-field"
			placeholder="Enter your complaint here">
		</textarea>
	</div>

	
	<button id ="submit" onclick = "sub()" >
		Submit
	</button>
	</div>
  </div>
  );
};
export default CreatComplain;
