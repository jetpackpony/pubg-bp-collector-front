import React, { useState } from 'react';
import moment from 'moment';

function App({ firebase }) {
  const [rankBP, setRankBP] = useState("");
  const [killBP, setKillBP] = useState("");
  const [hitBP, setHitBP] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    firebase.sendBPData({
      rankBP: parseInt(rankBP, 10),
      killBP: parseInt(killBP, 10),
      hitBP: parseInt(hitBP, 10),
      attachedToMatch: false
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setRankBP("");
        setKillBP("");
        setHitBP("");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Rank BP:
            <input name="rankBP" type="number" value={rankBP} onChange={e => setRankBP(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Kill BP:
            <input id="killBP" name="killBP" type="number" value={killBP} onChange={e => setKillBP(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Hit BP:
            <input id="hitBP" name="hitBP" type="number" value={hitBP} onChange={e => setHitBP(e.target.value)} />
          </label>
        </div>

        <div>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
