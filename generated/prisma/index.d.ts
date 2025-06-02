
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Vagas
 * 
 */
export type Vagas = $Result.DefaultSelection<Prisma.$VagasPayload>
/**
 * Model UsuarioVagas
 * 
 */
export type UsuarioVagas = $Result.DefaultSelection<Prisma.$UsuarioVagasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vagas`: Exposes CRUD operations for the **Vagas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vagases
    * const vagases = await prisma.vagas.findMany()
    * ```
    */
  get vagas(): Prisma.VagasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioVagas`: Exposes CRUD operations for the **UsuarioVagas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioVagases
    * const usuarioVagases = await prisma.usuarioVagas.findMany()
    * ```
    */
  get usuarioVagas(): Prisma.UsuarioVagasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Vagas: 'Vagas',
    UsuarioVagas: 'UsuarioVagas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "vagas" | "usuarioVagas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Vagas: {
        payload: Prisma.$VagasPayload<ExtArgs>
        fields: Prisma.VagasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VagasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VagasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          findFirst: {
            args: Prisma.VagasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VagasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          findMany: {
            args: Prisma.VagasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          create: {
            args: Prisma.VagasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          createMany: {
            args: Prisma.VagasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VagasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          delete: {
            args: Prisma.VagasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          update: {
            args: Prisma.VagasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          deleteMany: {
            args: Prisma.VagasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VagasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VagasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          upsert: {
            args: Prisma.VagasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          aggregate: {
            args: Prisma.VagasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVagas>
          }
          groupBy: {
            args: Prisma.VagasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VagasGroupByOutputType>[]
          }
          count: {
            args: Prisma.VagasCountArgs<ExtArgs>
            result: $Utils.Optional<VagasCountAggregateOutputType> | number
          }
        }
      }
      UsuarioVagas: {
        payload: Prisma.$UsuarioVagasPayload<ExtArgs>
        fields: Prisma.UsuarioVagasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioVagasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioVagasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          findFirst: {
            args: Prisma.UsuarioVagasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioVagasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          findMany: {
            args: Prisma.UsuarioVagasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>[]
          }
          create: {
            args: Prisma.UsuarioVagasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          createMany: {
            args: Prisma.UsuarioVagasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioVagasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>[]
          }
          delete: {
            args: Prisma.UsuarioVagasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          update: {
            args: Prisma.UsuarioVagasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioVagasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioVagasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioVagasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioVagasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioVagasPayload>
          }
          aggregate: {
            args: Prisma.UsuarioVagasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioVagas>
          }
          groupBy: {
            args: Prisma.UsuarioVagasGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioVagasGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioVagasCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioVagasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    vagas?: VagasOmit
    usuarioVagas?: UsuarioVagasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    vagasCriadas: number
    candidaturas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagasCriadas?: boolean | UsuarioCountOutputTypeCountVagasCriadasArgs
    candidaturas?: boolean | UsuarioCountOutputTypeCountCandidaturasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVagasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagasWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCandidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioVagasWhereInput
  }


  /**
   * Count Type VagasCountOutputType
   */

  export type VagasCountOutputType = {
    candidaturas: number
  }

  export type VagasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidaturas?: boolean | VagasCountOutputTypeCountCandidaturasArgs
  }

  // Custom InputTypes
  /**
   * VagasCountOutputType without action
   */
  export type VagasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VagasCountOutputType
     */
    select?: VagasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VagasCountOutputType without action
   */
  export type VagasCountOutputTypeCountCandidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioVagasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    totalPoints: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    totalPoints: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    fullname: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    totalPoints: number | null
    scolarity: string | null
    birthDate: Date | null
    cpf: string | null
    profession: string | null
    adress: string | null
    cep: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    fullname: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    totalPoints: number | null
    scolarity: string | null
    birthDate: Date | null
    cpf: string | null
    profession: string | null
    adress: string | null
    cep: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    fullname: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    totalPoints: number
    scolarity: number
    birthDate: number
    cpf: number
    profession: number
    adress: number
    cep: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    totalPoints?: true
  }

  export type UsuarioSumAggregateInputType = {
    totalPoints?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullname?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    totalPoints?: true
    scolarity?: true
    birthDate?: true
    cpf?: true
    profession?: true
    adress?: true
    cep?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullname?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    totalPoints?: true
    scolarity?: true
    birthDate?: true
    cpf?: true
    profession?: true
    adress?: true
    cep?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullname?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    totalPoints?: true
    scolarity?: true
    birthDate?: true
    cpf?: true
    profession?: true
    adress?: true
    cep?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    fullname: string | null
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    totalPoints: number
    scolarity: string | null
    birthDate: Date | null
    cpf: string | null
    profession: string | null
    adress: string | null
    cep: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullname?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPoints?: boolean
    scolarity?: boolean
    birthDate?: boolean
    cpf?: boolean
    profession?: boolean
    adress?: boolean
    cep?: boolean
    vagasCriadas?: boolean | Usuario$vagasCriadasArgs<ExtArgs>
    candidaturas?: boolean | Usuario$candidaturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullname?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPoints?: boolean
    scolarity?: boolean
    birthDate?: boolean
    cpf?: boolean
    profession?: boolean
    adress?: boolean
    cep?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullname?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPoints?: boolean
    scolarity?: boolean
    birthDate?: boolean
    cpf?: boolean
    profession?: boolean
    adress?: boolean
    cep?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullname?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPoints?: boolean
    scolarity?: boolean
    birthDate?: boolean
    cpf?: boolean
    profession?: boolean
    adress?: boolean
    cep?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "fullname" | "isAdmin" | "createdAt" | "updatedAt" | "totalPoints" | "scolarity" | "birthDate" | "cpf" | "profession" | "adress" | "cep", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagasCriadas?: boolean | Usuario$vagasCriadasArgs<ExtArgs>
    candidaturas?: boolean | Usuario$candidaturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      vagasCriadas: Prisma.$VagasPayload<ExtArgs>[]
      candidaturas: Prisma.$UsuarioVagasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      fullname: string | null
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
      totalPoints: number
      scolarity: string | null
      birthDate: Date | null
      cpf: string | null
      profession: string | null
      adress: string | null
      cep: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vagasCriadas<T extends Usuario$vagasCriadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$vagasCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidaturas<T extends Usuario$candidaturasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$candidaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly fullname: FieldRef<"Usuario", 'String'>
    readonly isAdmin: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly totalPoints: FieldRef<"Usuario", 'Int'>
    readonly scolarity: FieldRef<"Usuario", 'String'>
    readonly birthDate: FieldRef<"Usuario", 'DateTime'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly profession: FieldRef<"Usuario", 'String'>
    readonly adress: FieldRef<"Usuario", 'String'>
    readonly cep: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.vagasCriadas
   */
  export type Usuario$vagasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    where?: VagasWhereInput
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    cursor?: VagasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Usuario.candidaturas
   */
  export type Usuario$candidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    where?: UsuarioVagasWhereInput
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    cursor?: UsuarioVagasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioVagasScalarFieldEnum | UsuarioVagasScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Vagas
   */

  export type AggregateVagas = {
    _count: VagasCountAggregateOutputType | null
    _avg: VagasAvgAggregateOutputType | null
    _sum: VagasSumAggregateOutputType | null
    _min: VagasMinAggregateOutputType | null
    _max: VagasMaxAggregateOutputType | null
  }

  export type VagasAvgAggregateOutputType = {
    rewardPoints: number | null
  }

  export type VagasSumAggregateOutputType = {
    rewardPoints: number | null
  }

  export type VagasMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    rewardPoints: number | null
    taskDate: Date | null
    creatorID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VagasMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    rewardPoints: number | null
    taskDate: Date | null
    creatorID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type VagasCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    rewardPoints: number
    taskDate: number
    creatorID: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type VagasAvgAggregateInputType = {
    rewardPoints?: true
  }

  export type VagasSumAggregateInputType = {
    rewardPoints?: true
  }

  export type VagasMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    rewardPoints?: true
    taskDate?: true
    creatorID?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VagasMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    rewardPoints?: true
    taskDate?: true
    creatorID?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type VagasCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    rewardPoints?: true
    taskDate?: true
    creatorID?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type VagasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagas to aggregate.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vagases
    **/
    _count?: true | VagasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VagasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VagasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VagasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VagasMaxAggregateInputType
  }

  export type GetVagasAggregateType<T extends VagasAggregateArgs> = {
        [P in keyof T & keyof AggregateVagas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVagas[P]>
      : GetScalarType<T[P], AggregateVagas[P]>
  }




  export type VagasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagasWhereInput
    orderBy?: VagasOrderByWithAggregationInput | VagasOrderByWithAggregationInput[]
    by: VagasScalarFieldEnum[] | VagasScalarFieldEnum
    having?: VagasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VagasCountAggregateInputType | true
    _avg?: VagasAvgAggregateInputType
    _sum?: VagasSumAggregateInputType
    _min?: VagasMinAggregateInputType
    _max?: VagasMaxAggregateInputType
  }

  export type VagasGroupByOutputType = {
    id: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date
    creatorID: string
    createdAt: Date
    updatedAt: Date
    status: string
    _count: VagasCountAggregateOutputType | null
    _avg: VagasAvgAggregateOutputType | null
    _sum: VagasSumAggregateOutputType | null
    _min: VagasMinAggregateOutputType | null
    _max: VagasMaxAggregateOutputType | null
  }

  type GetVagasGroupByPayload<T extends VagasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VagasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VagasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VagasGroupByOutputType[P]>
            : GetScalarType<T[P], VagasGroupByOutputType[P]>
        }
      >
    >


  export type VagasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    rewardPoints?: boolean
    taskDate?: boolean
    creatorID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    candidaturas?: boolean | Vagas$candidaturasArgs<ExtArgs>
    _count?: boolean | VagasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    rewardPoints?: boolean
    taskDate?: boolean
    creatorID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    rewardPoints?: boolean
    taskDate?: boolean
    creatorID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    rewardPoints?: boolean
    taskDate?: boolean
    creatorID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type VagasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "rewardPoints" | "taskDate" | "creatorID" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["vagas"]>
  export type VagasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    candidaturas?: boolean | Vagas$candidaturasArgs<ExtArgs>
    _count?: boolean | VagasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VagasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VagasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VagasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vagas"
    objects: {
      criador: Prisma.$UsuarioPayload<ExtArgs>
      candidaturas: Prisma.$UsuarioVagasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      description: string
      rewardPoints: number
      taskDate: Date
      creatorID: string
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["vagas"]>
    composites: {}
  }

  type VagasGetPayload<S extends boolean | null | undefined | VagasDefaultArgs> = $Result.GetResult<Prisma.$VagasPayload, S>

  type VagasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VagasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VagasCountAggregateInputType | true
    }

  export interface VagasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vagas'], meta: { name: 'Vagas' } }
    /**
     * Find zero or one Vagas that matches the filter.
     * @param {VagasFindUniqueArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VagasFindUniqueArgs>(args: SelectSubset<T, VagasFindUniqueArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vagas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VagasFindUniqueOrThrowArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VagasFindUniqueOrThrowArgs>(args: SelectSubset<T, VagasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindFirstArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VagasFindFirstArgs>(args?: SelectSubset<T, VagasFindFirstArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vagas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindFirstOrThrowArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VagasFindFirstOrThrowArgs>(args?: SelectSubset<T, VagasFindFirstOrThrowArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vagases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vagases
     * const vagases = await prisma.vagas.findMany()
     * 
     * // Get first 10 Vagases
     * const vagases = await prisma.vagas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vagasWithIdOnly = await prisma.vagas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VagasFindManyArgs>(args?: SelectSubset<T, VagasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vagas.
     * @param {VagasCreateArgs} args - Arguments to create a Vagas.
     * @example
     * // Create one Vagas
     * const Vagas = await prisma.vagas.create({
     *   data: {
     *     // ... data to create a Vagas
     *   }
     * })
     * 
     */
    create<T extends VagasCreateArgs>(args: SelectSubset<T, VagasCreateArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vagases.
     * @param {VagasCreateManyArgs} args - Arguments to create many Vagases.
     * @example
     * // Create many Vagases
     * const vagas = await prisma.vagas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VagasCreateManyArgs>(args?: SelectSubset<T, VagasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vagases and returns the data saved in the database.
     * @param {VagasCreateManyAndReturnArgs} args - Arguments to create many Vagases.
     * @example
     * // Create many Vagases
     * const vagas = await prisma.vagas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vagases and only return the `id`
     * const vagasWithIdOnly = await prisma.vagas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VagasCreateManyAndReturnArgs>(args?: SelectSubset<T, VagasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vagas.
     * @param {VagasDeleteArgs} args - Arguments to delete one Vagas.
     * @example
     * // Delete one Vagas
     * const Vagas = await prisma.vagas.delete({
     *   where: {
     *     // ... filter to delete one Vagas
     *   }
     * })
     * 
     */
    delete<T extends VagasDeleteArgs>(args: SelectSubset<T, VagasDeleteArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vagas.
     * @param {VagasUpdateArgs} args - Arguments to update one Vagas.
     * @example
     * // Update one Vagas
     * const vagas = await prisma.vagas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VagasUpdateArgs>(args: SelectSubset<T, VagasUpdateArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vagases.
     * @param {VagasDeleteManyArgs} args - Arguments to filter Vagases to delete.
     * @example
     * // Delete a few Vagases
     * const { count } = await prisma.vagas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VagasDeleteManyArgs>(args?: SelectSubset<T, VagasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vagases
     * const vagas = await prisma.vagas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VagasUpdateManyArgs>(args: SelectSubset<T, VagasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagases and returns the data updated in the database.
     * @param {VagasUpdateManyAndReturnArgs} args - Arguments to update many Vagases.
     * @example
     * // Update many Vagases
     * const vagas = await prisma.vagas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vagases and only return the `id`
     * const vagasWithIdOnly = await prisma.vagas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VagasUpdateManyAndReturnArgs>(args: SelectSubset<T, VagasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vagas.
     * @param {VagasUpsertArgs} args - Arguments to update or create a Vagas.
     * @example
     * // Update or create a Vagas
     * const vagas = await prisma.vagas.upsert({
     *   create: {
     *     // ... data to create a Vagas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vagas we want to update
     *   }
     * })
     */
    upsert<T extends VagasUpsertArgs>(args: SelectSubset<T, VagasUpsertArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasCountArgs} args - Arguments to filter Vagases to count.
     * @example
     * // Count the number of Vagases
     * const count = await prisma.vagas.count({
     *   where: {
     *     // ... the filter for the Vagases we want to count
     *   }
     * })
    **/
    count<T extends VagasCountArgs>(
      args?: Subset<T, VagasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VagasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VagasAggregateArgs>(args: Subset<T, VagasAggregateArgs>): Prisma.PrismaPromise<GetVagasAggregateType<T>>

    /**
     * Group by Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VagasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VagasGroupByArgs['orderBy'] }
        : { orderBy?: VagasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VagasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVagasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vagas model
   */
  readonly fields: VagasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vagas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VagasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidaturas<T extends Vagas$candidaturasArgs<ExtArgs> = {}>(args?: Subset<T, Vagas$candidaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vagas model
   */
  interface VagasFieldRefs {
    readonly id: FieldRef<"Vagas", 'String'>
    readonly type: FieldRef<"Vagas", 'String'>
    readonly title: FieldRef<"Vagas", 'String'>
    readonly description: FieldRef<"Vagas", 'String'>
    readonly rewardPoints: FieldRef<"Vagas", 'Int'>
    readonly taskDate: FieldRef<"Vagas", 'DateTime'>
    readonly creatorID: FieldRef<"Vagas", 'String'>
    readonly createdAt: FieldRef<"Vagas", 'DateTime'>
    readonly updatedAt: FieldRef<"Vagas", 'DateTime'>
    readonly status: FieldRef<"Vagas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vagas findUnique
   */
  export type VagasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas findUniqueOrThrow
   */
  export type VagasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas findFirst
   */
  export type VagasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagases.
     */
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas findFirstOrThrow
   */
  export type VagasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagases.
     */
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas findMany
   */
  export type VagasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagases to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas create
   */
  export type VagasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The data needed to create a Vagas.
     */
    data: XOR<VagasCreateInput, VagasUncheckedCreateInput>
  }

  /**
   * Vagas createMany
   */
  export type VagasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vagases.
     */
    data: VagasCreateManyInput | VagasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vagas createManyAndReturn
   */
  export type VagasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * The data used to create many Vagases.
     */
    data: VagasCreateManyInput | VagasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vagas update
   */
  export type VagasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The data needed to update a Vagas.
     */
    data: XOR<VagasUpdateInput, VagasUncheckedUpdateInput>
    /**
     * Choose, which Vagas to update.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas updateMany
   */
  export type VagasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vagases.
     */
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyInput>
    /**
     * Filter which Vagases to update
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to update.
     */
    limit?: number
  }

  /**
   * Vagas updateManyAndReturn
   */
  export type VagasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * The data used to update Vagases.
     */
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyInput>
    /**
     * Filter which Vagases to update
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vagas upsert
   */
  export type VagasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The filter to search for the Vagas to update in case it exists.
     */
    where: VagasWhereUniqueInput
    /**
     * In case the Vagas found by the `where` argument doesn't exist, create a new Vagas with this data.
     */
    create: XOR<VagasCreateInput, VagasUncheckedCreateInput>
    /**
     * In case the Vagas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VagasUpdateInput, VagasUncheckedUpdateInput>
  }

  /**
   * Vagas delete
   */
  export type VagasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter which Vagas to delete.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas deleteMany
   */
  export type VagasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagases to delete
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to delete.
     */
    limit?: number
  }

  /**
   * Vagas.candidaturas
   */
  export type Vagas$candidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    where?: UsuarioVagasWhereInput
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    cursor?: UsuarioVagasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioVagasScalarFieldEnum | UsuarioVagasScalarFieldEnum[]
  }

  /**
   * Vagas without action
   */
  export type VagasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioVagas
   */

  export type AggregateUsuarioVagas = {
    _count: UsuarioVagasCountAggregateOutputType | null
    _min: UsuarioVagasMinAggregateOutputType | null
    _max: UsuarioVagasMaxAggregateOutputType | null
  }

  export type UsuarioVagasMinAggregateOutputType = {
    id: string | null
    userID: string | null
    vagaID: string | null
    status: string | null
  }

  export type UsuarioVagasMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    vagaID: string | null
    status: string | null
  }

  export type UsuarioVagasCountAggregateOutputType = {
    id: number
    userID: number
    vagaID: number
    status: number
    _all: number
  }


  export type UsuarioVagasMinAggregateInputType = {
    id?: true
    userID?: true
    vagaID?: true
    status?: true
  }

  export type UsuarioVagasMaxAggregateInputType = {
    id?: true
    userID?: true
    vagaID?: true
    status?: true
  }

  export type UsuarioVagasCountAggregateInputType = {
    id?: true
    userID?: true
    vagaID?: true
    status?: true
    _all?: true
  }

  export type UsuarioVagasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioVagas to aggregate.
     */
    where?: UsuarioVagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioVagases to fetch.
     */
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioVagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioVagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioVagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioVagases
    **/
    _count?: true | UsuarioVagasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioVagasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioVagasMaxAggregateInputType
  }

  export type GetUsuarioVagasAggregateType<T extends UsuarioVagasAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioVagas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioVagas[P]>
      : GetScalarType<T[P], AggregateUsuarioVagas[P]>
  }




  export type UsuarioVagasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioVagasWhereInput
    orderBy?: UsuarioVagasOrderByWithAggregationInput | UsuarioVagasOrderByWithAggregationInput[]
    by: UsuarioVagasScalarFieldEnum[] | UsuarioVagasScalarFieldEnum
    having?: UsuarioVagasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioVagasCountAggregateInputType | true
    _min?: UsuarioVagasMinAggregateInputType
    _max?: UsuarioVagasMaxAggregateInputType
  }

  export type UsuarioVagasGroupByOutputType = {
    id: string
    userID: string
    vagaID: string
    status: string
    _count: UsuarioVagasCountAggregateOutputType | null
    _min: UsuarioVagasMinAggregateOutputType | null
    _max: UsuarioVagasMaxAggregateOutputType | null
  }

  type GetUsuarioVagasGroupByPayload<T extends UsuarioVagasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioVagasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioVagasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioVagasGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioVagasGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioVagasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    vagaID?: boolean
    status?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioVagas"]>

  export type UsuarioVagasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    vagaID?: boolean
    status?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioVagas"]>

  export type UsuarioVagasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    vagaID?: boolean
    status?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioVagas"]>

  export type UsuarioVagasSelectScalar = {
    id?: boolean
    userID?: boolean
    vagaID?: boolean
    status?: boolean
  }

  export type UsuarioVagasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "vagaID" | "status", ExtArgs["result"]["usuarioVagas"]>
  export type UsuarioVagasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }
  export type UsuarioVagasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }
  export type UsuarioVagasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagasDefaultArgs<ExtArgs>
  }

  export type $UsuarioVagasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioVagas"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vaga: Prisma.$VagasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      vagaID: string
      status: string
    }, ExtArgs["result"]["usuarioVagas"]>
    composites: {}
  }

  type UsuarioVagasGetPayload<S extends boolean | null | undefined | UsuarioVagasDefaultArgs> = $Result.GetResult<Prisma.$UsuarioVagasPayload, S>

  type UsuarioVagasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioVagasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioVagasCountAggregateInputType | true
    }

  export interface UsuarioVagasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioVagas'], meta: { name: 'UsuarioVagas' } }
    /**
     * Find zero or one UsuarioVagas that matches the filter.
     * @param {UsuarioVagasFindUniqueArgs} args - Arguments to find a UsuarioVagas
     * @example
     * // Get one UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioVagasFindUniqueArgs>(args: SelectSubset<T, UsuarioVagasFindUniqueArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioVagas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioVagasFindUniqueOrThrowArgs} args - Arguments to find a UsuarioVagas
     * @example
     * // Get one UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioVagasFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioVagasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioVagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasFindFirstArgs} args - Arguments to find a UsuarioVagas
     * @example
     * // Get one UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioVagasFindFirstArgs>(args?: SelectSubset<T, UsuarioVagasFindFirstArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioVagas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasFindFirstOrThrowArgs} args - Arguments to find a UsuarioVagas
     * @example
     * // Get one UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioVagasFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioVagasFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioVagases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioVagases
     * const usuarioVagases = await prisma.usuarioVagas.findMany()
     * 
     * // Get first 10 UsuarioVagases
     * const usuarioVagases = await prisma.usuarioVagas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioVagasWithIdOnly = await prisma.usuarioVagas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioVagasFindManyArgs>(args?: SelectSubset<T, UsuarioVagasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioVagas.
     * @param {UsuarioVagasCreateArgs} args - Arguments to create a UsuarioVagas.
     * @example
     * // Create one UsuarioVagas
     * const UsuarioVagas = await prisma.usuarioVagas.create({
     *   data: {
     *     // ... data to create a UsuarioVagas
     *   }
     * })
     * 
     */
    create<T extends UsuarioVagasCreateArgs>(args: SelectSubset<T, UsuarioVagasCreateArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioVagases.
     * @param {UsuarioVagasCreateManyArgs} args - Arguments to create many UsuarioVagases.
     * @example
     * // Create many UsuarioVagases
     * const usuarioVagas = await prisma.usuarioVagas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioVagasCreateManyArgs>(args?: SelectSubset<T, UsuarioVagasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioVagases and returns the data saved in the database.
     * @param {UsuarioVagasCreateManyAndReturnArgs} args - Arguments to create many UsuarioVagases.
     * @example
     * // Create many UsuarioVagases
     * const usuarioVagas = await prisma.usuarioVagas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioVagases and only return the `id`
     * const usuarioVagasWithIdOnly = await prisma.usuarioVagas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioVagasCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioVagasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioVagas.
     * @param {UsuarioVagasDeleteArgs} args - Arguments to delete one UsuarioVagas.
     * @example
     * // Delete one UsuarioVagas
     * const UsuarioVagas = await prisma.usuarioVagas.delete({
     *   where: {
     *     // ... filter to delete one UsuarioVagas
     *   }
     * })
     * 
     */
    delete<T extends UsuarioVagasDeleteArgs>(args: SelectSubset<T, UsuarioVagasDeleteArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioVagas.
     * @param {UsuarioVagasUpdateArgs} args - Arguments to update one UsuarioVagas.
     * @example
     * // Update one UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioVagasUpdateArgs>(args: SelectSubset<T, UsuarioVagasUpdateArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioVagases.
     * @param {UsuarioVagasDeleteManyArgs} args - Arguments to filter UsuarioVagases to delete.
     * @example
     * // Delete a few UsuarioVagases
     * const { count } = await prisma.usuarioVagas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioVagasDeleteManyArgs>(args?: SelectSubset<T, UsuarioVagasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioVagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioVagases
     * const usuarioVagas = await prisma.usuarioVagas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioVagasUpdateManyArgs>(args: SelectSubset<T, UsuarioVagasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioVagases and returns the data updated in the database.
     * @param {UsuarioVagasUpdateManyAndReturnArgs} args - Arguments to update many UsuarioVagases.
     * @example
     * // Update many UsuarioVagases
     * const usuarioVagas = await prisma.usuarioVagas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioVagases and only return the `id`
     * const usuarioVagasWithIdOnly = await prisma.usuarioVagas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioVagasUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioVagasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioVagas.
     * @param {UsuarioVagasUpsertArgs} args - Arguments to update or create a UsuarioVagas.
     * @example
     * // Update or create a UsuarioVagas
     * const usuarioVagas = await prisma.usuarioVagas.upsert({
     *   create: {
     *     // ... data to create a UsuarioVagas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioVagas we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioVagasUpsertArgs>(args: SelectSubset<T, UsuarioVagasUpsertArgs<ExtArgs>>): Prisma__UsuarioVagasClient<$Result.GetResult<Prisma.$UsuarioVagasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioVagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasCountArgs} args - Arguments to filter UsuarioVagases to count.
     * @example
     * // Count the number of UsuarioVagases
     * const count = await prisma.usuarioVagas.count({
     *   where: {
     *     // ... the filter for the UsuarioVagases we want to count
     *   }
     * })
    **/
    count<T extends UsuarioVagasCountArgs>(
      args?: Subset<T, UsuarioVagasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioVagasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioVagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioVagasAggregateArgs>(args: Subset<T, UsuarioVagasAggregateArgs>): Prisma.PrismaPromise<GetUsuarioVagasAggregateType<T>>

    /**
     * Group by UsuarioVagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioVagasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioVagasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioVagasGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioVagasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioVagasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioVagasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioVagas model
   */
  readonly fields: UsuarioVagasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioVagas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioVagasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vaga<T extends VagasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VagasDefaultArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioVagas model
   */
  interface UsuarioVagasFieldRefs {
    readonly id: FieldRef<"UsuarioVagas", 'String'>
    readonly userID: FieldRef<"UsuarioVagas", 'String'>
    readonly vagaID: FieldRef<"UsuarioVagas", 'String'>
    readonly status: FieldRef<"UsuarioVagas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioVagas findUnique
   */
  export type UsuarioVagasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioVagas to fetch.
     */
    where: UsuarioVagasWhereUniqueInput
  }

  /**
   * UsuarioVagas findUniqueOrThrow
   */
  export type UsuarioVagasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioVagas to fetch.
     */
    where: UsuarioVagasWhereUniqueInput
  }

  /**
   * UsuarioVagas findFirst
   */
  export type UsuarioVagasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioVagas to fetch.
     */
    where?: UsuarioVagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioVagases to fetch.
     */
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioVagases.
     */
    cursor?: UsuarioVagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioVagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioVagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioVagases.
     */
    distinct?: UsuarioVagasScalarFieldEnum | UsuarioVagasScalarFieldEnum[]
  }

  /**
   * UsuarioVagas findFirstOrThrow
   */
  export type UsuarioVagasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioVagas to fetch.
     */
    where?: UsuarioVagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioVagases to fetch.
     */
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioVagases.
     */
    cursor?: UsuarioVagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioVagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioVagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioVagases.
     */
    distinct?: UsuarioVagasScalarFieldEnum | UsuarioVagasScalarFieldEnum[]
  }

  /**
   * UsuarioVagas findMany
   */
  export type UsuarioVagasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioVagases to fetch.
     */
    where?: UsuarioVagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioVagases to fetch.
     */
    orderBy?: UsuarioVagasOrderByWithRelationInput | UsuarioVagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioVagases.
     */
    cursor?: UsuarioVagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioVagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioVagases.
     */
    skip?: number
    distinct?: UsuarioVagasScalarFieldEnum | UsuarioVagasScalarFieldEnum[]
  }

  /**
   * UsuarioVagas create
   */
  export type UsuarioVagasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioVagas.
     */
    data: XOR<UsuarioVagasCreateInput, UsuarioVagasUncheckedCreateInput>
  }

  /**
   * UsuarioVagas createMany
   */
  export type UsuarioVagasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioVagases.
     */
    data: UsuarioVagasCreateManyInput | UsuarioVagasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioVagas createManyAndReturn
   */
  export type UsuarioVagasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioVagases.
     */
    data: UsuarioVagasCreateManyInput | UsuarioVagasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioVagas update
   */
  export type UsuarioVagasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioVagas.
     */
    data: XOR<UsuarioVagasUpdateInput, UsuarioVagasUncheckedUpdateInput>
    /**
     * Choose, which UsuarioVagas to update.
     */
    where: UsuarioVagasWhereUniqueInput
  }

  /**
   * UsuarioVagas updateMany
   */
  export type UsuarioVagasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioVagases.
     */
    data: XOR<UsuarioVagasUpdateManyMutationInput, UsuarioVagasUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioVagases to update
     */
    where?: UsuarioVagasWhereInput
    /**
     * Limit how many UsuarioVagases to update.
     */
    limit?: number
  }

  /**
   * UsuarioVagas updateManyAndReturn
   */
  export type UsuarioVagasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioVagases.
     */
    data: XOR<UsuarioVagasUpdateManyMutationInput, UsuarioVagasUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioVagases to update
     */
    where?: UsuarioVagasWhereInput
    /**
     * Limit how many UsuarioVagases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioVagas upsert
   */
  export type UsuarioVagasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioVagas to update in case it exists.
     */
    where: UsuarioVagasWhereUniqueInput
    /**
     * In case the UsuarioVagas found by the `where` argument doesn't exist, create a new UsuarioVagas with this data.
     */
    create: XOR<UsuarioVagasCreateInput, UsuarioVagasUncheckedCreateInput>
    /**
     * In case the UsuarioVagas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioVagasUpdateInput, UsuarioVagasUncheckedUpdateInput>
  }

  /**
   * UsuarioVagas delete
   */
  export type UsuarioVagasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
    /**
     * Filter which UsuarioVagas to delete.
     */
    where: UsuarioVagasWhereUniqueInput
  }

  /**
   * UsuarioVagas deleteMany
   */
  export type UsuarioVagasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioVagases to delete
     */
    where?: UsuarioVagasWhereInput
    /**
     * Limit how many UsuarioVagases to delete.
     */
    limit?: number
  }

  /**
   * UsuarioVagas without action
   */
  export type UsuarioVagasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioVagas
     */
    select?: UsuarioVagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioVagas
     */
    omit?: UsuarioVagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioVagasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    fullname: 'fullname',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    totalPoints: 'totalPoints',
    scolarity: 'scolarity',
    birthDate: 'birthDate',
    cpf: 'cpf',
    profession: 'profession',
    adress: 'adress',
    cep: 'cep'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VagasScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    rewardPoints: 'rewardPoints',
    taskDate: 'taskDate',
    creatorID: 'creatorID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type VagasScalarFieldEnum = (typeof VagasScalarFieldEnum)[keyof typeof VagasScalarFieldEnum]


  export const UsuarioVagasScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    vagaID: 'vagaID',
    status: 'status'
  };

  export type UsuarioVagasScalarFieldEnum = (typeof UsuarioVagasScalarFieldEnum)[keyof typeof UsuarioVagasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    fullname?: StringNullableFilter<"Usuario"> | string | null
    isAdmin?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    totalPoints?: IntFilter<"Usuario"> | number
    scolarity?: StringNullableFilter<"Usuario"> | string | null
    birthDate?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    cpf?: StringNullableFilter<"Usuario"> | string | null
    profession?: StringNullableFilter<"Usuario"> | string | null
    adress?: StringNullableFilter<"Usuario"> | string | null
    cep?: StringNullableFilter<"Usuario"> | string | null
    vagasCriadas?: VagasListRelationFilter
    candidaturas?: UsuarioVagasListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPoints?: SortOrder
    scolarity?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    adress?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    vagasCriadas?: VagasOrderByRelationAggregateInput
    candidaturas?: UsuarioVagasOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    fullname?: StringNullableFilter<"Usuario"> | string | null
    isAdmin?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    totalPoints?: IntFilter<"Usuario"> | number
    scolarity?: StringNullableFilter<"Usuario"> | string | null
    birthDate?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    profession?: StringNullableFilter<"Usuario"> | string | null
    adress?: StringNullableFilter<"Usuario"> | string | null
    cep?: StringNullableFilter<"Usuario"> | string | null
    vagasCriadas?: VagasListRelationFilter
    candidaturas?: UsuarioVagasListRelationFilter
  }, "id" | "username" | "email" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPoints?: SortOrder
    scolarity?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    adress?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    fullname?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    totalPoints?: IntWithAggregatesFilter<"Usuario"> | number
    scolarity?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    cpf?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    profession?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    adress?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type VagasWhereInput = {
    AND?: VagasWhereInput | VagasWhereInput[]
    OR?: VagasWhereInput[]
    NOT?: VagasWhereInput | VagasWhereInput[]
    id?: StringFilter<"Vagas"> | string
    type?: StringFilter<"Vagas"> | string
    title?: StringFilter<"Vagas"> | string
    description?: StringFilter<"Vagas"> | string
    rewardPoints?: IntFilter<"Vagas"> | number
    taskDate?: DateTimeFilter<"Vagas"> | Date | string
    creatorID?: StringFilter<"Vagas"> | string
    createdAt?: DateTimeFilter<"Vagas"> | Date | string
    updatedAt?: DateTimeFilter<"Vagas"> | Date | string
    status?: StringFilter<"Vagas"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    candidaturas?: UsuarioVagasListRelationFilter
  }

  export type VagasOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rewardPoints?: SortOrder
    taskDate?: SortOrder
    creatorID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    criador?: UsuarioOrderByWithRelationInput
    candidaturas?: UsuarioVagasOrderByRelationAggregateInput
  }

  export type VagasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VagasWhereInput | VagasWhereInput[]
    OR?: VagasWhereInput[]
    NOT?: VagasWhereInput | VagasWhereInput[]
    type?: StringFilter<"Vagas"> | string
    title?: StringFilter<"Vagas"> | string
    description?: StringFilter<"Vagas"> | string
    rewardPoints?: IntFilter<"Vagas"> | number
    taskDate?: DateTimeFilter<"Vagas"> | Date | string
    creatorID?: StringFilter<"Vagas"> | string
    createdAt?: DateTimeFilter<"Vagas"> | Date | string
    updatedAt?: DateTimeFilter<"Vagas"> | Date | string
    status?: StringFilter<"Vagas"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    candidaturas?: UsuarioVagasListRelationFilter
  }, "id">

  export type VagasOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rewardPoints?: SortOrder
    taskDate?: SortOrder
    creatorID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: VagasCountOrderByAggregateInput
    _avg?: VagasAvgOrderByAggregateInput
    _max?: VagasMaxOrderByAggregateInput
    _min?: VagasMinOrderByAggregateInput
    _sum?: VagasSumOrderByAggregateInput
  }

  export type VagasScalarWhereWithAggregatesInput = {
    AND?: VagasScalarWhereWithAggregatesInput | VagasScalarWhereWithAggregatesInput[]
    OR?: VagasScalarWhereWithAggregatesInput[]
    NOT?: VagasScalarWhereWithAggregatesInput | VagasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vagas"> | string
    type?: StringWithAggregatesFilter<"Vagas"> | string
    title?: StringWithAggregatesFilter<"Vagas"> | string
    description?: StringWithAggregatesFilter<"Vagas"> | string
    rewardPoints?: IntWithAggregatesFilter<"Vagas"> | number
    taskDate?: DateTimeWithAggregatesFilter<"Vagas"> | Date | string
    creatorID?: StringWithAggregatesFilter<"Vagas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vagas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vagas"> | Date | string
    status?: StringWithAggregatesFilter<"Vagas"> | string
  }

  export type UsuarioVagasWhereInput = {
    AND?: UsuarioVagasWhereInput | UsuarioVagasWhereInput[]
    OR?: UsuarioVagasWhereInput[]
    NOT?: UsuarioVagasWhereInput | UsuarioVagasWhereInput[]
    id?: StringFilter<"UsuarioVagas"> | string
    userID?: StringFilter<"UsuarioVagas"> | string
    vagaID?: StringFilter<"UsuarioVagas"> | string
    status?: StringFilter<"UsuarioVagas"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vaga?: XOR<VagasScalarRelationFilter, VagasWhereInput>
  }

  export type UsuarioVagasOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    vagaID?: SortOrder
    status?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vaga?: VagasOrderByWithRelationInput
  }

  export type UsuarioVagasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userID_vagaID?: UsuarioVagasUserIDVagaIDCompoundUniqueInput
    AND?: UsuarioVagasWhereInput | UsuarioVagasWhereInput[]
    OR?: UsuarioVagasWhereInput[]
    NOT?: UsuarioVagasWhereInput | UsuarioVagasWhereInput[]
    userID?: StringFilter<"UsuarioVagas"> | string
    vagaID?: StringFilter<"UsuarioVagas"> | string
    status?: StringFilter<"UsuarioVagas"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vaga?: XOR<VagasScalarRelationFilter, VagasWhereInput>
  }, "id" | "userID_vagaID">

  export type UsuarioVagasOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    vagaID?: SortOrder
    status?: SortOrder
    _count?: UsuarioVagasCountOrderByAggregateInput
    _max?: UsuarioVagasMaxOrderByAggregateInput
    _min?: UsuarioVagasMinOrderByAggregateInput
  }

  export type UsuarioVagasScalarWhereWithAggregatesInput = {
    AND?: UsuarioVagasScalarWhereWithAggregatesInput | UsuarioVagasScalarWhereWithAggregatesInput[]
    OR?: UsuarioVagasScalarWhereWithAggregatesInput[]
    NOT?: UsuarioVagasScalarWhereWithAggregatesInput | UsuarioVagasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsuarioVagas"> | string
    userID?: StringWithAggregatesFilter<"UsuarioVagas"> | string
    vagaID?: StringWithAggregatesFilter<"UsuarioVagas"> | string
    status?: StringWithAggregatesFilter<"UsuarioVagas"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    vagasCriadas?: VagasCreateNestedManyWithoutCriadorInput
    candidaturas?: UsuarioVagasCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    vagasCriadas?: VagasUncheckedCreateNestedManyWithoutCriadorInput
    candidaturas?: UsuarioVagasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    vagasCriadas?: VagasUpdateManyWithoutCriadorNestedInput
    candidaturas?: UsuarioVagasUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    vagasCriadas?: VagasUncheckedUpdateManyWithoutCriadorNestedInput
    candidaturas?: UsuarioVagasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VagasCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    criador: UsuarioCreateNestedOneWithoutVagasCriadasInput
    candidaturas?: UsuarioVagasCreateNestedManyWithoutVagaInput
  }

  export type VagasUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    creatorID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    candidaturas?: UsuarioVagasUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    criador?: UsuarioUpdateOneRequiredWithoutVagasCriadasNestedInput
    candidaturas?: UsuarioVagasUpdateManyWithoutVagaNestedInput
  }

  export type VagasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidaturas?: UsuarioVagasUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagasCreateManyInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    creatorID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VagasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VagasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasCreateInput = {
    id?: string
    status?: string
    usuario: UsuarioCreateNestedOneWithoutCandidaturasInput
    vaga: VagasCreateNestedOneWithoutCandidaturasInput
  }

  export type UsuarioVagasUncheckedCreateInput = {
    id?: string
    userID: string
    vagaID: string
    status?: string
  }

  export type UsuarioVagasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCandidaturasNestedInput
    vaga?: VagasUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type UsuarioVagasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    vagaID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasCreateManyInput = {
    id?: string
    userID: string
    vagaID: string
    status?: string
  }

  export type UsuarioVagasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    vagaID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VagasListRelationFilter = {
    every?: VagasWhereInput
    some?: VagasWhereInput
    none?: VagasWhereInput
  }

  export type UsuarioVagasListRelationFilter = {
    every?: UsuarioVagasWhereInput
    some?: UsuarioVagasWhereInput
    none?: UsuarioVagasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VagasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioVagasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPoints?: SortOrder
    scolarity?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    profession?: SortOrder
    adress?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPoints?: SortOrder
    scolarity?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    profession?: SortOrder
    adress?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPoints?: SortOrder
    scolarity?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    profession?: SortOrder
    adress?: SortOrder
    cep?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    totalPoints?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VagasCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rewardPoints?: SortOrder
    taskDate?: SortOrder
    creatorID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VagasAvgOrderByAggregateInput = {
    rewardPoints?: SortOrder
  }

  export type VagasMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rewardPoints?: SortOrder
    taskDate?: SortOrder
    creatorID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VagasMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rewardPoints?: SortOrder
    taskDate?: SortOrder
    creatorID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type VagasSumOrderByAggregateInput = {
    rewardPoints?: SortOrder
  }

  export type VagasScalarRelationFilter = {
    is?: VagasWhereInput
    isNot?: VagasWhereInput
  }

  export type UsuarioVagasUserIDVagaIDCompoundUniqueInput = {
    userID: string
    vagaID: string
  }

  export type UsuarioVagasCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    vagaID?: SortOrder
    status?: SortOrder
  }

  export type UsuarioVagasMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    vagaID?: SortOrder
    status?: SortOrder
  }

  export type UsuarioVagasMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    vagaID?: SortOrder
    status?: SortOrder
  }

  export type VagasCreateNestedManyWithoutCriadorInput = {
    create?: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput> | VagasCreateWithoutCriadorInput[] | VagasUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutCriadorInput | VagasCreateOrConnectWithoutCriadorInput[]
    createMany?: VagasCreateManyCriadorInputEnvelope
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
  }

  export type UsuarioVagasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput> | UsuarioVagasCreateWithoutUsuarioInput[] | UsuarioVagasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutUsuarioInput | UsuarioVagasCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioVagasCreateManyUsuarioInputEnvelope
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
  }

  export type VagasUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput> | VagasCreateWithoutCriadorInput[] | VagasUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutCriadorInput | VagasCreateOrConnectWithoutCriadorInput[]
    createMany?: VagasCreateManyCriadorInputEnvelope
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
  }

  export type UsuarioVagasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput> | UsuarioVagasCreateWithoutUsuarioInput[] | UsuarioVagasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutUsuarioInput | UsuarioVagasCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioVagasCreateManyUsuarioInputEnvelope
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VagasUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput> | VagasCreateWithoutCriadorInput[] | VagasUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutCriadorInput | VagasCreateOrConnectWithoutCriadorInput[]
    upsert?: VagasUpsertWithWhereUniqueWithoutCriadorInput | VagasUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: VagasCreateManyCriadorInputEnvelope
    set?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    disconnect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    delete?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    update?: VagasUpdateWithWhereUniqueWithoutCriadorInput | VagasUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: VagasUpdateManyWithWhereWithoutCriadorInput | VagasUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: VagasScalarWhereInput | VagasScalarWhereInput[]
  }

  export type UsuarioVagasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput> | UsuarioVagasCreateWithoutUsuarioInput[] | UsuarioVagasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutUsuarioInput | UsuarioVagasCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioVagasUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioVagasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioVagasCreateManyUsuarioInputEnvelope
    set?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    disconnect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    delete?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    update?: UsuarioVagasUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioVagasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioVagasUpdateManyWithWhereWithoutUsuarioInput | UsuarioVagasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
  }

  export type VagasUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput> | VagasCreateWithoutCriadorInput[] | VagasUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutCriadorInput | VagasCreateOrConnectWithoutCriadorInput[]
    upsert?: VagasUpsertWithWhereUniqueWithoutCriadorInput | VagasUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: VagasCreateManyCriadorInputEnvelope
    set?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    disconnect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    delete?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    update?: VagasUpdateWithWhereUniqueWithoutCriadorInput | VagasUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: VagasUpdateManyWithWhereWithoutCriadorInput | VagasUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: VagasScalarWhereInput | VagasScalarWhereInput[]
  }

  export type UsuarioVagasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput> | UsuarioVagasCreateWithoutUsuarioInput[] | UsuarioVagasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutUsuarioInput | UsuarioVagasCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioVagasUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioVagasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioVagasCreateManyUsuarioInputEnvelope
    set?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    disconnect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    delete?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    update?: UsuarioVagasUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioVagasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioVagasUpdateManyWithWhereWithoutUsuarioInput | UsuarioVagasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutVagasCriadasInput = {
    create?: XOR<UsuarioCreateWithoutVagasCriadasInput, UsuarioUncheckedCreateWithoutVagasCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVagasCriadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioVagasCreateNestedManyWithoutVagaInput = {
    create?: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput> | UsuarioVagasCreateWithoutVagaInput[] | UsuarioVagasUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutVagaInput | UsuarioVagasCreateOrConnectWithoutVagaInput[]
    createMany?: UsuarioVagasCreateManyVagaInputEnvelope
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
  }

  export type UsuarioVagasUncheckedCreateNestedManyWithoutVagaInput = {
    create?: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput> | UsuarioVagasCreateWithoutVagaInput[] | UsuarioVagasUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutVagaInput | UsuarioVagasCreateOrConnectWithoutVagaInput[]
    createMany?: UsuarioVagasCreateManyVagaInputEnvelope
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutVagasCriadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVagasCriadasInput, UsuarioUncheckedCreateWithoutVagasCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVagasCriadasInput
    upsert?: UsuarioUpsertWithoutVagasCriadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVagasCriadasInput, UsuarioUpdateWithoutVagasCriadasInput>, UsuarioUncheckedUpdateWithoutVagasCriadasInput>
  }

  export type UsuarioVagasUpdateManyWithoutVagaNestedInput = {
    create?: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput> | UsuarioVagasCreateWithoutVagaInput[] | UsuarioVagasUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutVagaInput | UsuarioVagasCreateOrConnectWithoutVagaInput[]
    upsert?: UsuarioVagasUpsertWithWhereUniqueWithoutVagaInput | UsuarioVagasUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: UsuarioVagasCreateManyVagaInputEnvelope
    set?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    disconnect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    delete?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    update?: UsuarioVagasUpdateWithWhereUniqueWithoutVagaInput | UsuarioVagasUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: UsuarioVagasUpdateManyWithWhereWithoutVagaInput | UsuarioVagasUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
  }

  export type UsuarioVagasUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput> | UsuarioVagasCreateWithoutVagaInput[] | UsuarioVagasUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: UsuarioVagasCreateOrConnectWithoutVagaInput | UsuarioVagasCreateOrConnectWithoutVagaInput[]
    upsert?: UsuarioVagasUpsertWithWhereUniqueWithoutVagaInput | UsuarioVagasUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: UsuarioVagasCreateManyVagaInputEnvelope
    set?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    disconnect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    delete?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    connect?: UsuarioVagasWhereUniqueInput | UsuarioVagasWhereUniqueInput[]
    update?: UsuarioVagasUpdateWithWhereUniqueWithoutVagaInput | UsuarioVagasUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: UsuarioVagasUpdateManyWithWhereWithoutVagaInput | UsuarioVagasUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCandidaturasInput = {
    create?: XOR<UsuarioCreateWithoutCandidaturasInput, UsuarioUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCandidaturasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VagasCreateNestedOneWithoutCandidaturasInput = {
    create?: XOR<VagasCreateWithoutCandidaturasInput, VagasUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: VagasCreateOrConnectWithoutCandidaturasInput
    connect?: VagasWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCandidaturasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCandidaturasInput, UsuarioUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCandidaturasInput
    upsert?: UsuarioUpsertWithoutCandidaturasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCandidaturasInput, UsuarioUpdateWithoutCandidaturasInput>, UsuarioUncheckedUpdateWithoutCandidaturasInput>
  }

  export type VagasUpdateOneRequiredWithoutCandidaturasNestedInput = {
    create?: XOR<VagasCreateWithoutCandidaturasInput, VagasUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: VagasCreateOrConnectWithoutCandidaturasInput
    upsert?: VagasUpsertWithoutCandidaturasInput
    connect?: VagasWhereUniqueInput
    update?: XOR<XOR<VagasUpdateToOneWithWhereWithoutCandidaturasInput, VagasUpdateWithoutCandidaturasInput>, VagasUncheckedUpdateWithoutCandidaturasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VagasCreateWithoutCriadorInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    candidaturas?: UsuarioVagasCreateNestedManyWithoutVagaInput
  }

  export type VagasUncheckedCreateWithoutCriadorInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    candidaturas?: UsuarioVagasUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagasCreateOrConnectWithoutCriadorInput = {
    where: VagasWhereUniqueInput
    create: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput>
  }

  export type VagasCreateManyCriadorInputEnvelope = {
    data: VagasCreateManyCriadorInput | VagasCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioVagasCreateWithoutUsuarioInput = {
    id?: string
    status?: string
    vaga: VagasCreateNestedOneWithoutCandidaturasInput
  }

  export type UsuarioVagasUncheckedCreateWithoutUsuarioInput = {
    id?: string
    vagaID: string
    status?: string
  }

  export type UsuarioVagasCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioVagasWhereUniqueInput
    create: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioVagasCreateManyUsuarioInputEnvelope = {
    data: UsuarioVagasCreateManyUsuarioInput | UsuarioVagasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VagasUpsertWithWhereUniqueWithoutCriadorInput = {
    where: VagasWhereUniqueInput
    update: XOR<VagasUpdateWithoutCriadorInput, VagasUncheckedUpdateWithoutCriadorInput>
    create: XOR<VagasCreateWithoutCriadorInput, VagasUncheckedCreateWithoutCriadorInput>
  }

  export type VagasUpdateWithWhereUniqueWithoutCriadorInput = {
    where: VagasWhereUniqueInput
    data: XOR<VagasUpdateWithoutCriadorInput, VagasUncheckedUpdateWithoutCriadorInput>
  }

  export type VagasUpdateManyWithWhereWithoutCriadorInput = {
    where: VagasScalarWhereInput
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyWithoutCriadorInput>
  }

  export type VagasScalarWhereInput = {
    AND?: VagasScalarWhereInput | VagasScalarWhereInput[]
    OR?: VagasScalarWhereInput[]
    NOT?: VagasScalarWhereInput | VagasScalarWhereInput[]
    id?: StringFilter<"Vagas"> | string
    type?: StringFilter<"Vagas"> | string
    title?: StringFilter<"Vagas"> | string
    description?: StringFilter<"Vagas"> | string
    rewardPoints?: IntFilter<"Vagas"> | number
    taskDate?: DateTimeFilter<"Vagas"> | Date | string
    creatorID?: StringFilter<"Vagas"> | string
    createdAt?: DateTimeFilter<"Vagas"> | Date | string
    updatedAt?: DateTimeFilter<"Vagas"> | Date | string
    status?: StringFilter<"Vagas"> | string
  }

  export type UsuarioVagasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioVagasWhereUniqueInput
    update: XOR<UsuarioVagasUpdateWithoutUsuarioInput, UsuarioVagasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioVagasCreateWithoutUsuarioInput, UsuarioVagasUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioVagasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioVagasWhereUniqueInput
    data: XOR<UsuarioVagasUpdateWithoutUsuarioInput, UsuarioVagasUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioVagasUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioVagasScalarWhereInput
    data: XOR<UsuarioVagasUpdateManyMutationInput, UsuarioVagasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioVagasScalarWhereInput = {
    AND?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
    OR?: UsuarioVagasScalarWhereInput[]
    NOT?: UsuarioVagasScalarWhereInput | UsuarioVagasScalarWhereInput[]
    id?: StringFilter<"UsuarioVagas"> | string
    userID?: StringFilter<"UsuarioVagas"> | string
    vagaID?: StringFilter<"UsuarioVagas"> | string
    status?: StringFilter<"UsuarioVagas"> | string
  }

  export type UsuarioCreateWithoutVagasCriadasInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    candidaturas?: UsuarioVagasCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVagasCriadasInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    candidaturas?: UsuarioVagasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVagasCriadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVagasCriadasInput, UsuarioUncheckedCreateWithoutVagasCriadasInput>
  }

  export type UsuarioVagasCreateWithoutVagaInput = {
    id?: string
    status?: string
    usuario: UsuarioCreateNestedOneWithoutCandidaturasInput
  }

  export type UsuarioVagasUncheckedCreateWithoutVagaInput = {
    id?: string
    userID: string
    status?: string
  }

  export type UsuarioVagasCreateOrConnectWithoutVagaInput = {
    where: UsuarioVagasWhereUniqueInput
    create: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput>
  }

  export type UsuarioVagasCreateManyVagaInputEnvelope = {
    data: UsuarioVagasCreateManyVagaInput | UsuarioVagasCreateManyVagaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutVagasCriadasInput = {
    update: XOR<UsuarioUpdateWithoutVagasCriadasInput, UsuarioUncheckedUpdateWithoutVagasCriadasInput>
    create: XOR<UsuarioCreateWithoutVagasCriadasInput, UsuarioUncheckedCreateWithoutVagasCriadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVagasCriadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVagasCriadasInput, UsuarioUncheckedUpdateWithoutVagasCriadasInput>
  }

  export type UsuarioUpdateWithoutVagasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    candidaturas?: UsuarioVagasUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVagasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    candidaturas?: UsuarioVagasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioVagasUpsertWithWhereUniqueWithoutVagaInput = {
    where: UsuarioVagasWhereUniqueInput
    update: XOR<UsuarioVagasUpdateWithoutVagaInput, UsuarioVagasUncheckedUpdateWithoutVagaInput>
    create: XOR<UsuarioVagasCreateWithoutVagaInput, UsuarioVagasUncheckedCreateWithoutVagaInput>
  }

  export type UsuarioVagasUpdateWithWhereUniqueWithoutVagaInput = {
    where: UsuarioVagasWhereUniqueInput
    data: XOR<UsuarioVagasUpdateWithoutVagaInput, UsuarioVagasUncheckedUpdateWithoutVagaInput>
  }

  export type UsuarioVagasUpdateManyWithWhereWithoutVagaInput = {
    where: UsuarioVagasScalarWhereInput
    data: XOR<UsuarioVagasUpdateManyMutationInput, UsuarioVagasUncheckedUpdateManyWithoutVagaInput>
  }

  export type UsuarioCreateWithoutCandidaturasInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    vagasCriadas?: VagasCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioUncheckedCreateWithoutCandidaturasInput = {
    id?: string
    username: string
    password: string
    email: string
    fullname?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPoints?: number
    scolarity?: string | null
    birthDate?: Date | string | null
    cpf?: string | null
    profession?: string | null
    adress?: string | null
    cep?: string | null
    vagasCriadas?: VagasUncheckedCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioCreateOrConnectWithoutCandidaturasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCandidaturasInput, UsuarioUncheckedCreateWithoutCandidaturasInput>
  }

  export type VagasCreateWithoutCandidaturasInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    criador: UsuarioCreateNestedOneWithoutVagasCriadasInput
  }

  export type VagasUncheckedCreateWithoutCandidaturasInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    creatorID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type VagasCreateOrConnectWithoutCandidaturasInput = {
    where: VagasWhereUniqueInput
    create: XOR<VagasCreateWithoutCandidaturasInput, VagasUncheckedCreateWithoutCandidaturasInput>
  }

  export type UsuarioUpsertWithoutCandidaturasInput = {
    update: XOR<UsuarioUpdateWithoutCandidaturasInput, UsuarioUncheckedUpdateWithoutCandidaturasInput>
    create: XOR<UsuarioCreateWithoutCandidaturasInput, UsuarioUncheckedCreateWithoutCandidaturasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCandidaturasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCandidaturasInput, UsuarioUncheckedUpdateWithoutCandidaturasInput>
  }

  export type UsuarioUpdateWithoutCandidaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    vagasCriadas?: VagasUpdateManyWithoutCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCandidaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    scolarity?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    vagasCriadas?: VagasUncheckedUpdateManyWithoutCriadorNestedInput
  }

  export type VagasUpsertWithoutCandidaturasInput = {
    update: XOR<VagasUpdateWithoutCandidaturasInput, VagasUncheckedUpdateWithoutCandidaturasInput>
    create: XOR<VagasCreateWithoutCandidaturasInput, VagasUncheckedCreateWithoutCandidaturasInput>
    where?: VagasWhereInput
  }

  export type VagasUpdateToOneWithWhereWithoutCandidaturasInput = {
    where?: VagasWhereInput
    data: XOR<VagasUpdateWithoutCandidaturasInput, VagasUncheckedUpdateWithoutCandidaturasInput>
  }

  export type VagasUpdateWithoutCandidaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    criador?: UsuarioUpdateOneRequiredWithoutVagasCriadasNestedInput
  }

  export type VagasUncheckedUpdateWithoutCandidaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VagasCreateManyCriadorInput = {
    id?: string
    type: string
    title: string
    description: string
    rewardPoints: number
    taskDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type UsuarioVagasCreateManyUsuarioInput = {
    id?: string
    vagaID: string
    status?: string
  }

  export type VagasUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidaturas?: UsuarioVagasUpdateManyWithoutVagaNestedInput
  }

  export type VagasUncheckedUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidaturas?: UsuarioVagasUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagasUncheckedUpdateManyWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    taskDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    vaga?: VagasUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type UsuarioVagasUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasCreateManyVagaInput = {
    id?: string
    userID: string
    status?: string
  }

  export type UsuarioVagasUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type UsuarioVagasUncheckedUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioVagasUncheckedUpdateManyWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}