function createPreview(bookData) {
    const { author, image, title } = bookData;
  
    const preview = document.createElement('div');
    preview.classList.add('preview');
  
    const previewImage = document.createElement('img');
    previewImage.src = image;
    previewImage.alt = title;
    preview.appendChild(previewImage);
  
    const previewTitle = document.createElement('h2');
    previewTitle.textContent = title;
    preview.appendChild(previewTitle);
  
    const previewAuthor = document.createElement('p');
    previewAuthor.textContent = authors[author];
    preview.appendChild(previewAuthor);
  
    return preview;
}

function createPreviewFragment(data, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];

    const preview = createPreview({
      author,
      id,
      image,
      title
    });

    fragment.appendChild(preview);
  }

  return fragment;
}

for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];

  const preview = createPreview({
    author,
    id,
    image,
    title
  });

  fragment.appendChild(preview);
}
