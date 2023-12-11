import { Serializer as ДокументСохSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot7-документ-сох';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокументСохSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
