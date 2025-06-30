<h1>Tree-View</h1>
<h2>Caution</h2>
<p>This whole project could be a eyesore for you if you are a UI/Ux lover 
    i mean i totally suck at stylling for now BUT BUT BUT I'll make sure to learn better styling when i learn all this ahrd stuff
    so for now let's move forward to explaining what and how
</p>

<h2>What</h2>
<p>So this web app is basically a ui that lets user to see how the paging system works for this website
    MEANS?
    like there are total 3 pages ,
    but if you click on one you'll be able to see how many more are pages exist in that page
</p>

<h2>How ?</h2>
<p>So i've got a Data.js where a json file is located which has the sturctre of this webpage
    so acc to the json while there were children in object and that children consisted another array of object which also has some children

<b>SO NOW</b>
I made two different component one with the listing and one with the item inside it 
Now i got one component which <b>Mlist</b> This map the data.js array and create 
<b>Mitem</b> For each item and in <b>Mitem</b> i used recursive component composition 
where i just Used <b>Mitem</b> inside <b>Mitem</b>
<h3>This functionality let's me infintely loop over the array not infinetly but as long as there is a children containing an array</h3>
</p>






----------------------<h1>Thanx for reading till end</h1>-------------------------
