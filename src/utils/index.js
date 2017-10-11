export const pipeParams = (data) => Object.keys(data).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');

export const filterBodyZone = (list) => {
    const copyList = [...list];
    return copyList.filter(item => item.BodyZoneJson.find(zone => zone === 1));
}