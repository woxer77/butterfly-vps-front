const getRandomIconId = (iconsId: string[]) => {
  return iconsId[Math.floor(Math.random() * iconsId.length)];
};

export const getIconId = (id: string, iconsId: string[]) => {
  const iconExists = iconsId.includes(id);
  return iconExists ? id : getRandomIconId(iconsId);
};
