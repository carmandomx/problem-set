
export interface Person {
    imageId: string;
    name: string;
}

export function getImageUrl(person: Person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  