/* Copyright 2017 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

module tf.graph.op {

  /**
   * Whitelist of current Tensorflow ops valid on the TPU
   */
  export const WHITELIST = [
    'Abs',
    'Acosh',
    'Add',
    'AddN',
    'All',
    'Angle',
    'Any',
    'ApproximateEqual',
    'ArgMax',
    'ArgMin',
    'Asinh',
    'Assert',
    'AssignAddVariableOp',
    'AssignSubVariableOp',
    'AssignVariableOp',
    'Atan2',
    'Atanh',
    'AvgPool',
    'AvgPool3D',
    'AvgPool3DGrad',
    'AvgPoolGrad',
    'BatchMatMul',
    'BatchToSpace',
    'BatchToSpaceND',
    'BiasAdd',
    'BiasAddGrad',
    'BiasAddV1',
    'BitwiseAnd',
    'BitwiseOr',
    'BroadcastArgs',
    'BroadcastGradientArgs',
    'Cast',
    'Ceil',
    'CheckNumerics',
    'Cholesky',
    'Complex',
    'ComplexAbs',
    'Concat',
    'ConcatOffset',
    'ConcatV2',
    'Conj',
    'Const',
    'ControlTrigger',
    'Conv2D',
    'Conv2DBackpropFilter',
    'Conv2DBackpropInput',
    'Conv3D',
    'Conv3DBackpropFilterV2',
    'Conv3DBackpropInputV2',
    'Cos',
    'Cosh',
    'Cross',
    'CrossReplicaSum',
    'DepthToSpace',
    'DepthwiseConv2dNative',
    'DepthwiseConv2dNativeBackpropFilter',
    'DepthwiseConv2dNativeBackpropInput',
    'Diag',
    'DiagPart',
    'Div',
    'DynamicStitch',
    'Elu',
    'EluGrad',
    'Empty',
    'Equal',
    'Exp',
    'ExpandDims',
    'Expm1',
    'Fill',
    'Floor',
    'FloorDiv',
    'FloorMod',
    'FusedBatchNorm',
    'FusedBatchNormGrad',
    'Gather',
    'GatherV2',
    'Greater',
    'GreaterEqual',
    'Identity',
    'IdentityN',
    'If',
    'Imag',
    'InfeedDequeue',
    'InfeedDequeueTuple',
    'InplaceAdd',
    'InplaceUpdate',
    'Inv',
    'Invert',
    'InvertPermutation',
    'IsFinite',
    'IsInf',
    'IsNan',
    'L2Loss',
    'LRN',
    'LRNGrad',
    'LeftShift',
    'Less',
    'LessEqual',
    'LinSpace',
    'Log',
    'Log1p',
    'LogSoftmax',
    'LogicalAnd',
    'LogicalNot',
    'LogicalOr',
    'MatMul',
    'MatrixDiag',
    'MatrixDiagPart',
    'Max',
    'MaxPool',
    'MaxPool3D',
    'MaxPool3DGrad',
    'MaxPoolGrad',
    'Maximum',
    'Mean',
    'Min',
    'Minimum',
    'MirrorPad',
    'Mod',
    'Mul',
    'Multinomial',
    'Neg',
    'NoOp',
    'NotEqual',
    'OneHot',
    'OnesLike',
    'OutfeedEnqueue',
    'OutfeedEnqueueTuple',
    'Pack',
    'Pad',
    'PadV2',
    'ParallelDynamicStitch',
    'Pow',
    'PreventGradient',
    'Prod',
    'QuantizeAndDequantizeV2',
    'RandomStandardNormal',
    'RandomUniform',
    'RandomUniformInt',
    'Range',
    'Rank',
    'ReadVariableOp',
    'Real',
    'RealDiv',
    'Reciprocal',
    'ReciprocalGrad',
    'RecvBarnaCoreActivations',
    'Relu',
    'Relu6',
    'Relu6Grad',
    'ReluGrad',
    'Reshape',
    'ResourceApplyAdagrad',
    'ResourceApplyAdam',
    'ResourceApplyFtrl',
    'ResourceApplyFtrlV2',
    'ResourceApplyGradientDescent',
    'ResourceApplyMomentum',
    'ResourceApplyRMSProp',
    'ResourceGather',
    'ResourceStridedSliceAssign',
    'Reverse',
    'ReverseV2',
    'RightShift',
    'Rint',
    'Round',
    'Rsqrt',
    'RsqrtGrad',
    'Select',
    'Selu',
    'SeluGrad',
    'SendBarnaCoreGradients',
    'Shape',
    'ShapeN',
    'Sigmoid',
    'SigmoidGrad',
    'Sign',
    'Sin',
    'Sinh',
    'Size',
    'Slice',
    'Softmax',
    'SoftmaxCrossEntropyWithLogits',
    'Softplus',
    'SoftplusGrad',
    'Softsign',
    'SoftsignGrad',
    'SpaceToBatch',
    'SpaceToBatchND',
    'SpaceToDepth',
    'SparseMatMul',
    'SparseSoftmaxCrossEntropyWithLogits',
    'Split',
    'SplitV',
    'Sqrt',
    'SqrtGrad',
    'Square',
    'SquaredDifference',
    'Squeeze',
    'StackCloseV2',
    'StackPopV2',
    'StackPushV2',
    'StackV2',
    'StopGradient',
    'StridedSlice',
    'StridedSliceGrad',
    'Sub',
    'Sum',
    'SymbolicGradient',
    'TPUEmbeddingActivations',
    'Tan',
    'Tanh',
    'TanhGrad',
    'TensorArrayCloseV3',
    'TensorArrayConcatV3',
    'TensorArrayGatherV3',
    'TensorArrayGradV3',
    'TensorArrayReadV3',
    'TensorArrayScatterV3',
    'TensorArraySizeV3',
    'TensorArraySplitV3',
    'TensorArrayV3',
    'TensorArrayWriteV3',
    'Tile',
    'Transpose',
    'TruncateDiv',
    'TruncateMod',
    'TruncatedNormal',
    'Unpack',
    'UnsortedSegmentSum',
    'UpdateSlice',
    'VarIsInitializedOp',
    'While',
    'XlaIf',
    'XlaWhile',
    'ZerosLike',
    // Ops below are whitelisted, although these technically run on the CPU.
    // Separating these to indicate that these are manually added, as opposed to
    // those above that are gleaned from the op registry.
    'Placeholder',
    'VarHandleOp'
  ];

  /**
   * Returns true if OpNode graph object represents a
   * Tensorflow operation that is valid for the TPU.
   *
   * @param opNode OpNode graph object
   * @returns {boolean}
   */
  export function opValid(opNode: OpNode) : boolean {
    // If assigned a device, and it is not the TPU, assume op is valid
    if (opNode.device && opNode.device.toLowerCase().search("tpu") == -1) {
      return true;
    }
    return WHITELIST.indexOf(opNode.op) != -1;
  }

  export function checkOpsForCompatibility(graph: SlimGraph) {
    _.each(graph.nodes, (node) => {
      node.compatible = opValid(node);
      _.each(node.inEmbeddings, (node) => {
        node.compatible = opValid(node);
      });

      _.each(node.outEmbeddings, (node) => {
        node.compatible = opValid(node);
      });
    });
  }

} // close module tf.graph.op