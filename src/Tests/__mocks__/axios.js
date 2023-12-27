const dragonsData = [
  {
    id: 'dragon1',
    name: 'Dragon 1',
    description: 'Dragon 1 description',
    flickr_images: ['image1.jpg'],
    type: 'Dragon 1 type',
  },
  {
    id: 'dragon2',
    name: 'Dragon 2',
    description: 'Dragon 2 description',
    flickr_images: ['image2.jpg'],
    type: 'Dragon 2 type',
  },
];


const missionsData = [
  {
    id: 'mission1',
    missionName: 'Mission 1',
    description: 'Mission 1 description',
    imageMission: 'mission1.jpg',
  },
  {
    id: 'mission2',
    missionName: 'Mission 2',
    description: 'Mission 2 description',
    imageMission: 'mission2.jpg',
  },
];

const get = (url) => {
  if (url === 'https://api.spacexdata.com/v3/dragons') {
    return Promise.resolve({
      data: dragonsData,
    });
  }

 
  if (url === 'https://api.spacexdata.com/v3/missions') {
    return Promise.resolve({
      data: missionsData,
    });
  }

  return Promise.resolve({
    data: {},
  });
};

export default { get };
