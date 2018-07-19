/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */

// tslint:disable:max-line-length
import {DataSource} from '../datasource';
import {FileChunkIterator, FileChunkIteratorOptions} from '../stateful_iterators/file_chunk_iterator';
// tslint:enable:max-line-length

/**
 * Represents a file or blob readable as a stream of binary data chunks.
 */
export class FileDataSource extends DataSource {
  /**
   * Create a `FileDataSource`.
   *
   * @param input A `File` or `Blob` object to read.
   * @param options Options passed to the underlying `FileChunkIterator`s,
   *   such as {chunksize: 1024}.
   */
  constructor(
      protected readonly input: File|Blob,
      protected readonly options: FileChunkIteratorOptions = {}) {
    super();
  }

  iterator(): FileChunkIterator {
    return new FileChunkIterator(this.input, this.options);
  }
}
