<h1>🌳 Tree-View</h1>

<h2>⚠️ Caution</h2>
<p>
  This whole project might be an eyesore for you if you're a UI/UX lover 😅<br />
  I mean, I totally suck at styling for now—BUT BUT BUT I'll make sure to learn better styling once I conquer all this hard logic stuff.<br />
  So for now, let’s just move forward to the “what” and the “how.”
</p>

<h2>📌 What</h2>
<p>
  This web app is basically a UI that lets users see how a multi-page structure works.<br />
  MEANS?<br />
  Like, there are 3 total main pages... but when you click on one, you’ll discover more pages inside that page. It’s like uncovering digital Russian dolls.
</p>

<h2>🛠️ How?</h2>
<p>
  I’ve got a <code>Data.js</code> file that contains the JSON structure of the site.<br />
  According to that JSON, some objects have <code>children</code>, and those children can also have their own children... and so on.
</p>

<p>
  <strong>SO NOW:</strong><br />
  I made two different components:
  <ul>
    <li><strong>Mlist</strong> — maps the data.js array and renders individual items using...</li>
    <li><strong>Mitem</strong> — where I used <em>recursive component composition</em>, meaning I called <code>&lt;Mitem /&gt;</code> inside itself.</li>
  </ul>
</p>

<p>
  <h3>This functionality lets me loop through items as long as there’s a <code>children</code> array in them. Not infinitely, but as deep as the data goes!</h3>
</p>

<hr />

<h2>🙏 Thanks for Reading!</h2>
<p>
  If you made it this far, you’re amazing. See you in the next one 😄  
</p>
