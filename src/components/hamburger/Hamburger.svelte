<script>
    import styles from './hamburger.module.scss'

    let open = false;
  
    function toggleMenu() {
      open = !open;
    }
</script>

<div class={styles.container}>
    <button on:click={toggleMenu} class={styles.button}>
        <img src={'/hamburger.svg'} alt="hamburger" />
    </button>
    {#if open}
        <div class={styles.clickCatcher} on:click={toggleMenu} />
        <div class={styles.menu}>
            <a href="/" on:click={toggleMenu}>Home</a>
            <a href="events" on:click={toggleMenu}>Events</a>
            <a href="contact" on:click={toggleMenu}>Contact</a>
            <a href="https://www.youtube.com/@pinksofahour">Youtube</a>
            <a href="https://www.instagram.com/pinksofahour">Instagram</a>
        </div>        
    {/if}
</div>