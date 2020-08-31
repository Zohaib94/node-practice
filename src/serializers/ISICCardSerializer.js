import ISICCardResponse from '../responses/ISICCardResponse';

class ISICCardSerializer {
  static toResource(isicCardObject) {
    const isicCardResource = new ISICCardResponse(
      isicCardObject.number,
      isicCardObject.cvv,
      isicCardObject.expiry,
      isicCardObject.id,
    );
    return isicCardResource;
  }
}

export default ISICCardSerializer;
