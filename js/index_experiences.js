function create_experiences_card(data) {
    const container = document.getElementById('experiences-list');
    data.forEach(exp => {
        const wrapper = exp.link ? document.createElement('a') : document.createElement('div');
        if (exp.link) {
            wrapper.href = exp.link;
            wrapper.style.textDecoration = 'none';
            wrapper.style.color = 'inherit';
        }

        const card = document.createElement('div');
        card.className = 'experienceCard';

        const img = document.createElement('img');
        img.className = 'experiences-image';
        img.src = exp.image;
        img.alt = exp.titre;

        const info = document.createElement('div');
        info.className = 'experienceContent';
        const h3 = document.createElement('h3');
        h3.textContent = exp.titre;
        const p = document.createElement('p');
        p.textContent = exp.description;
        
        const periode = document.createElement('div');
        const periodeText = document.createElement('h4');
        periodeText.textContent = exp.periode;

        info.appendChild(h3);
        info.appendChild(p);

        card.appendChild(img);
        card.appendChild(info);

        card.appendChild(periode);
        periode.appendChild(periodeText);

        wrapper.appendChild(card);
        container.appendChild(wrapper);
    });
}



if (data_index_experiences.length > 0) {
    create_experiences_card(data_index_experiences.reverse());
} else {
    console.error("Aucun expérience disponible");
}

