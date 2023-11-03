import useActivity from "../hooks/activityDefinition";

export const LikePage = () => {
    const likeButton = document.getElementById('likeButton');
    let likeCount = 0;

    likeButton.addEventListener('click', () => {
        likeCount++;
        updateLikeCount();
    });

    function updateLikeCount() {
        const likeCountElement = document.createElement('p');
        likeCountElement.textContent = `Likes: ${likeCount}`;
        document.body.appendChild(likeCountElement);
    }
    return (
        <section> 
            <h1> Mis ejercicios Favoritos  </h1>
            <button>
            <span>{useActivity.likes}</span>
            <span class="material-symbols-outlined">star</span>
            </button>

            <p> Se mostrará el listado de los ejercicio que el usuario tenga como favorito </p> 
        </section>
    );
};