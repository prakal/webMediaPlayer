		        	<div className={styles2.musicPlayer}>
		        	  <img src={songs[3].cover} className={styles2.album} />
		        	  <div className={styles2.dash}>
		        	    <a href="#mute" className="fa fa-volume-up" ></a>
		        	    <span className={styles2.volumeLevel}>
		        	      <em style={{width: 75}}></em>
		        	    </span>
		        	    <a href="#share" className="fa fa-share"></a>
		        	    <a href="#love" className="fa fa-heart"></a>
		        	    <div className={styles2.seeker}>
		        	      <div className={styles2.wheel}>
		        	        <div className={styles2.progress}></div>
		        	      </div>
		        	    </div>
		        	    <a href="#seek"></a>
		        	    <div className={styles2.controls}>
		        	      <a href="#back" className="fa fa-fast-backward"></a>
		        	      <a href="#play" className="fa fa-pause"></a>
		        	      <a href="#forward" className="fa fa-fast-forward"></a>
		        	    </div>
		        	    <div className={styles2.info}>
		        	      <i><span name="current">0:00</span> / <span name="duration">0:00</span></i>
		        	      <label> {songs[3].artist.name} </label>
		        	      <small>{songs[3].artist.song}</small>
		        	    </div>
		        	  </div>
		        	</div>