// Datos dinámicos para cada stage
const modalData = {
    1: {
        imgSrc: 'images/service.jpg',
        description: `
            <strong>Stage 1: The Beginning of the journey.</strong><br>
            <p>This initial stage establishes the foundations of the progressive server, fostering a balanced environment for players who start at different times. During the first month, certain advanced features are disabled, allowing everyone to enjoy the content at a similar pace.</p>

            <p><strong>Features:</strong></p>
            <ul>
                <li><strong>Ant Queen</strong></li>
                <li><strong>Orfen</strong></li>
                <li><strong>Core</strong></li>
                <li><strong>Castles Sieges:</strong> Gludio, Dion, Giran, <s>Oren</s>, <s>Innadril</s>, <s>Aden</s>, <s>Schuttgart</s>, <s>Goddard</s>.</li>
                <li><s><strong>Antharas</strong></s></li>
                <li><s><strong>Baium</strong></s></li>
                <li><s><strong>Sub class activa</strong></s></li>
                <li><s><strong>3er clase activa</strong></s></li>
                <li><s><strong>Nobless</strong></s></li>
                <li><s><strong>Olympiads</strong></s></li>
                <li><s><strong>Valakas</strong></s></li>
            </ul>
            <p>Durante este primer mes, los NPCs, botones y portales avanzados estarán deshabilitados para mantener la experiencia balanceada para todos los jugadores.</p>
        `,
    },
    2: {
        imgSrc: 'images/modal_header_2.png',
        description: `
            <strong>Stage 2: New horizons.</strong><br>
            <p><strong>Features:</strong></p>
            <ul>
                <li><strong>Ant Queen</strong></li>
                <li><strong>Orfen</strong></li>
                <li><strong>Core</strong></li>
                <li><strong>Castles Sieges:</strong> Gludin, Gludio, Dion, Giran, Heine, Aden, Schuttgart, Goddard.</li>
                <li><strong>Antharas</strong></li>
                <li><strong>Baium</strong></li>
                <li><strong>Sub class activa</strong></li>
                <li><strong>3er clase activa</strong></li>
                <li><s><strong>Nobless</strong></s></li>
                <li><s><strong>Olympiads</strong></s></li>
                <li><s><strong>Valakas</strong></s></li>
            </ul>
            <p>This month brings a greater diversity of options for players who have surpassed the initial stage.</p>
        `,
    },
    3: {
        imgSrc: 'images/modal_header_2.png',
        description: `
            <strong>Stage 3: The Epic Battle.</strong><br>
            <p><strong>Features:</strong></p>
            <ul>
                <li><strong>Ant Queen</strong></li>
                <li><strong>Orfen</strong></li>
                <li><strong>Core</strong></li>
                <li><strong>Castles Sieges:</strong> Gludin, Gludio, Dion, Giran, Oren, Innadril, Aden, Schuttgart, Goddard.</li>
                <li><strong>Antharas</strong></li>
                <li><strong>Baium</strong></li>
                <li><strong>Sub class activa</strong></li>
                <li><strong>3er clase activa</strong></li>
                <li><strong>Nobless</strong></li>
                <li><strong>Olympiads</strong></li>
                <li><strong>Valakas</strong></li>
            </ul>
            <p>With full access to the server's features, players can compete at the highest level and explore all the endgame aspects of the server.</p>
           `,
    },
};



// Función para abrir el modal
function openModal(stageId)
{
    const modal = document.getElementById('modal');
    const headerImg = document.getElementById('modal-header-img');
    const description = document.getElementById('modal-description');

    // Obtener datos del modalData basado en el ID
    const stageData = modalData[stageId];

    // Actualizar el contenido del modal
    if (stageData)
    {
        headerImg.src = stageData.imgSrc;
        description.innerHTML = stageData.description;
    }

    // Mostrar el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal()
{
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Manejo para cerrar el modal si se hace clic fuera del contenido
window.onclick = function (event)
{
    const modal = document.getElementById('modal');
    if (event.target === modal)
    {
        closeModal();
    }
};
