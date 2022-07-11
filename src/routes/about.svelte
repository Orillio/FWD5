<script lang="ts">
</script>

<section class="hello_section">
	<div class="container">
		<div class="info">
			<h1 class="name">About me</h1>
			<div class="about_me">
				<p>
					I'm 19 years old, I'm studying at Innopolis University in the software development track.
					I like backend and frontend development for web and mobile applications.
				</p>
				<p>Good knowledge of C#, Dart, Python. At base level in Java, JS.</p>
				<p>
					Can make a simple layout with the right structure, and create a backend with extensible
					architecture. Excellent understanding of OOP (I can explain the difference between
					abstract class and interface). I know a lot of patterns, SOLID principles and know how to
					use them in the right places. I know a lot of algorithms and data structures, how to
					implement them and how to estimate the complexity of algorithms. I have some experience in
					Django API deployment using Docker.
				</p>
				<p>Currently I'm developing mobile apps on Flutter in the team.</p>
				<p>
					My soft skills include Project Management, Team Leading. Can find vectors for further
					product development and delegate tasks to achieve the set goal. I work using Scrum
					methodology.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Baloo Tammudu 2', cursive;
	}
	.container {
		max-width: 1020px;
		margin: 0 auto;
		display: block;
		height: 100%;
	}
	.hello_section {
		background-size: cover;
		background: linear-gradient(175deg, rgba(241, 0, 0, 1) 0%, rgba(240, 100, 87, 1) 100%);
	}
	.info {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.name {
		text-transform: uppercase;
		color: #f7f7f7;
		font-size: 70px;
		letter-spacing: 19px;
		font-family: 'Bebas Neue';
	}
	.about_me {
		text-align: center;
		color: #f7f7f7;
		margin-top: 50px;
		font-size: 20px;
		line-height: 25px;
	}
	.about_me p {
		margin-top: 20px;
	}
</style>
