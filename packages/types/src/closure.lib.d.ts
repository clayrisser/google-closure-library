// Work around for https://github.com/Microsoft/TypeScript/issues/983
// All clutz namespaces are below ಠ_ಠ.clutz, thus
// this acts as global.
declare namespace ಠ_ಠ.clutz {
  type GlobalDate = Date;
  var GlobalDate: typeof Date;
  type GlobalElement = Element;
  var GlobalElement: Element;
  type GlobalError = Error;
  var GlobalError: ErrorConstructor;
  type GlobalEvent = Event;
  var GlobalEvent: typeof Event;
  type GlobalEventTarget = EventTarget;
  var GlobalEventTarget: typeof EventTarget;
  type GlobalFloat32Array = Float32Array;
  var GlobalFloat32Array: typeof Float32Array;
  type GlobalFloat64Array = Float64Array;
  var GlobalFloat64Array: typeof Float64Array;
  type GlobalObject = Object;
  var GlobalObject: typeof Object;
  type GlobalStorage = Storage;
  var GlobalStorage: typeof Storage;

  /** Represents the type returned when goog.require-ing an unknown symbol */
  type ClosureSymbolNotGoogProvided = void;
  /** Represents a Closure type that is private, represented by an empty interface. */
  type PrivateType = void;
  /**
   * Represents a Closure class that is private. Only used for extending. When in
   * type position PrivateType is used.
   */
  class PrivateClass {}
  /**
   * Represents a Closure interface that is private. Only used for extending/implementing. When in
   * type position PrivateType is used.
   */
  interface PrivateInterface {}

  interface IObject<KEY1, VALUE> {}

  /**
   * A base class that can be used for extends/implement clauses when the used value is missing.
   */
  class ClutzMissingBase {}

  /**
   * `Image` is just a function but not a type in TypeScript.
   */
  interface Image extends HTMLImageElement {}

  /**
   * They are deprecated and not defined in TypeScript.
   * Just define the interface to avoid errors, not their properties.
   */
  interface HTMLIsIndexElement extends HTMLElement {}
  interface HTMLMenuItemElement extends HTMLElement {}
}

// Will be extended if base.js is a dependency.
declare namespace ಠ_ಠ.clutz.goog {
  var __namespace_needs_to_be_non_value_empty__: void;
}

/**
 * Global variable indicating whether the JavaScript code has been compiled.
 * This variable is defined in Closure's base.js, but not on the `goog` namespace, which
 * means it has to be explcitly declared here, similar to `goog` itself above.
 */
declare var COMPILED: boolean;
